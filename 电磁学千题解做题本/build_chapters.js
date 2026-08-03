#!/usr/bin/env node
/**
 * build_chapters.js — 从 extract_report.json 生成章节 tex 文件并迁移图片
 *
 * 规则：
 * - 按章分组生成 chapters/chapterN.tex
 * - 题目格式：\textbf{x.y.z.} 或 \textbf{x.y.} + 题目文本（保留 $..$/$$..$$，转义 % & # _）
 * - 每题后 \vfill；每 PROBLEMS_PER_PAGE 题后 \newpage
 * - 图片：复制到 figures/ 并重命名 fig_x_y_z[_n].jpg，\includegraphics[width=0.3\linewidth]
 * - 文本中的 ![](images/xxx.jpg) 行替换为 includegraphics 块（图注文字保留）
 */
const fs = require('fs');
const path = require('path');

const REPORT = 'extract_report.json';
const OUT_DIR = '.';              // 项目根
const CHAPTERS_DIR = path.join(OUT_DIR, 'chapters');
const FIGURES_DIR = path.join(OUT_DIR, 'figures');
const PROBLEMS_PER_PAGE = 2;

const report = JSON.parse(fs.readFileSync(REPORT, 'utf8'));

// 图片重命名：fig_<章>_<节>_<题>[_<n>].jpg （两级题号 fig_<章>_<题>[_<n>].jpg；多图时 _1/_2/... 从 1 开始）
function figName(id, idx, total, ext) {
  const parts = id.split('.').map((n) => parseInt(n, 10));
  const base = 'fig_' + parts.join('_');
  const suffix = total > 1 ? '_' + (idx + 1) : '';
  return base + suffix + ext;
}

// 转义 LaTeX 特殊字符（文本部分，数学模式 $..$ 内不转义）
function escapeLatex(text) {
  let out = '';
  let inMath = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '$') {
      // 检查是否 $$ 
      if (text[i + 1] === '$') {
        out += '$$';
        inMath = !inMath;
        i++;
      } else {
        out += '$';
        inMath = !inMath;
      }
      continue;
    }
    if (!inMath) {
      if (c === '\\' && text[i + 1] === '-') { out += '-'; i++; continue; } // PDF 残留 \-（文本模式连字符）
      if (c === '\\') { out += '\\textbackslash{}'; continue; }
      if (c === '%') { out += '\\%'; continue; }
      if (c === '&') { out += '\\&'; continue; }
      if (c === '#') { out += '\\#'; continue; }
      if (c === '_') { out += '\\_'; continue; }
      if (c === '{') { out += '\\{'; continue; }
      if (c === '}') { out += '\\}'; continue; }
      if (c === '~') { out += '\\textasciitilde{}'; continue; }
      if (c === '^') { out += '\\textasciicircum{}'; continue; }
    }
    out += c;
  }
  return out;
}

// 处理题目文本：删除图片引用行与独立图注行（图片统一渲染在题目末尾）
// 注意：数学模式状态（$...$ / $$...$$）必须跨行保持，因此对整段文本一次性转义
function renderProblemText(text, images) {
  const lines = text.split('\n');
  const kept = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (/!\[[^\]]*\]\([^)]+\)/.test(line)) continue;               // 图片引用行
    if (/^图\s*\d/.test(trimmed) && /^图[^\s]*(\([0-9]+\))?$/.test(trimmed)) continue; // 独立图注行
    kept.push(line);
  }
  const body = escapeLatex(kept.join('\n'));
  // 移除题目内公式的 \tag{...} 编号（做题本不需要公式编号；\tag{Ⅱ} 等全角参数会导致 xelatex 报错）
  const noTag = body.replace(/\\tag\s*\{[^}]*\}/g, '');
  const out = noTag.split('\n');
  // 图片统一渲染在题目末尾（含图注）
  // width=0.3\linewidth 常规宽度；height=0.6\textheight+keepaspectratio 约束超高图适配页面
  for (const img of images) {
    out.push('\\begin{center}');
    out.push('    \\includegraphics[width=0.3\\linewidth,height=0.6\\textheight,keepaspectratio]{' + img.figPath + '}');
    out.push('\\end{center}');
    if (img.caption) {
      out.push('\\textit{' + escapeLatex(img.caption) + '}');
    }
    out.push('');
  }
  return out.join('\n');
}

// 按章分组（保持题号排序——report 已按题号排序）
const byChapter = new Map();
for (const p of report.problems) {
  if (!byChapter.has(p.chapter)) byChapter.set(p.chapter, []);
  byChapter.get(p.chapter).push(p);
}

// 迁移图片并写入章节文件
fs.mkdirSync(CHAPTERS_DIR, { recursive: true });
fs.mkdirSync(FIGURES_DIR, { recursive: true });

const copied = [];
const missingImgs = [];

for (const [chapter, probs] of [...byChapter.entries()].sort((a, b) => a[0] - b[0])) {
  const chunks = [];
  let pageCount = 0;
  let probCount = 0;

  for (const p of probs) {
    // 分配图片文件名（按 images 数组顺序）
    const imgEntries = p.images.map((img, idx) => {
      const ext = path.extname(img.file) || '.jpg';
      const fname = figName(p.id, idx, p.images.length, ext);
      return { ...img, figPath: path.join('figures', fname).replace(/\\/g, '/'), fname };
    });
    // 复制图片（源与目标相同则跳过；目标已存在则覆盖以保证最新）
    for (const img of imgEntries) {
      if (img.srcPath && fs.existsSync(img.srcPath)) {
        const dest = path.join(FIGURES_DIR, img.fname);
        fs.copyFileSync(img.srcPath, dest);
        copied.push(dest);
      } else {
        missingImgs.push(p.id + ':' + img.file);
      }
    }
    // 渲染题目
    const body = renderProblemText(p.text, imgEntries);
    const idDisplay = p.id + '.';
    const tex = '\\textbf{' + idDisplay + '} ' + body;
    chunks.push(tex);
    probCount++;

    // 分页控制：每题后 \vfill；每 PROBLEMS_PER_PAGE 题后 \newpage（下一题前）
    pageCount++;
    if (pageCount >= PROBLEMS_PER_PAGE) {
      chunks.push('\\vfill');
      chunks.push('');
      chunks.push('\\newpage');
      pageCount = 0;
    } else {
      chunks.push('\\vfill');
      chunks.push('');
    }
  }

  // 去掉末尾多余空行
  while (chunks.length > 0 && chunks[chunks.length - 1] === '') chunks.pop();

  const filePath = path.join(CHAPTERS_DIR, 'chapter' + chapter + '.tex');
  fs.writeFileSync(filePath, chunks.join('\n') + '\n', 'utf8');
  console.log('chapter' + chapter + '.tex: ' + probs.length + ' 题 -> ' + filePath);
}

console.log('---');
console.log('已迁移图片:', copied.length, '| 缺失图片:', missingImgs.length);
if (missingImgs.length) console.log('缺失详情:', missingImgs.slice(0, 10).join('; '));
console.log('总题目数:', report.total);
