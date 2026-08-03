#!/usr/bin/env node
/**
 * extract.js — 从 MinerU 解析目录的 full.md 中提取题目（仅题目部分，不含解答）
 *
 * 规则：
 * - 题号：三级 x.y.z（第1,2,4,5,6,8,12章）与两级 x.y（第3,7,9,10,11章）
 * - 题目区：题号行 到 解题标记（【解】【证】【解答】【论证】等）或下一题号 之间
 * - 续行：行首题号 == 上一题号 且 后续以"所示/图数字"开头 => 并入当前题目（PDF 换行）
 * - 图注+题号同行（如 "图8.3.10 8.3.11 一螺绕环..."）：剥离行首图注，识别题号
 * - 图片归属：全局扫描图片行，关联其后图注（下一行/隔一行/同行），按图注题号匹配归属；
 *   题目区内无图注图片兜底归属当前题
 * - OCR 修正：0.2.22 => 6.2.22
 * - 文本缺失异常：1.1.13、1.2.13（仅有图注，无题号行）=> 记录 anomalies
 */
const fs = require('fs');
const path = require('path');

const BASE_DIR = 'D:/Program Files/Mineru/新建文件夹';
const SOURCE_DIRS = [
  '电磁学千题解（1）.pdf-8b77de4e-a2ef-45cd-9aaa-a89e3a4e0459',
  '电磁学千题解（1）.pdf-34c3b57d-3ed1-453e-b5f5-4435540e1e59',
  '电磁学千题解（1）.pdf-de0f6413-8ce8-47a4-be64-bcd5558bab9b',
  '电磁学千题解（1）.pdf-f2296093-bd2f-436c-a058-d4ca666dd429',
];

const CHAP_NUM = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10, 十一: 11, 十二: 12 };
const TWO_LEVEL_CHAPS = new Set([3, 7, 9, 10, 11]);
const SOLUTION_MARK = /^\s*#{0,3}\s*【\s*(解|证|解答|论证)\s*[】\}\]\s]*/;
const TWO_RE = /^(\d{1,2})\.(\d{1,2})(?=\s|$)/;
const THREE_RE = /^(\d{1,2})\.(\d{1,2})\.(\d{1,2})(?=\s|$)/;
const LEAD_CAPTION_RE = /^图\s*(\d{1,2})\.(\d{1,2})(?:\.(\d{1,2}))?(?:\((\d+)\))?\s+/; // 行首图注
const CAPTION_RE = /图\s*(\d{1,2})\.(\d{1,2})(?:\.(\d{1,2}))?(?:\((\d+)\))?/g;
const IMG_RE = /!\[[^\]]*\]\(([^)]+)\)/g;

function captionTarget(cap) {
  const m = cap.match(/图\s*(\d{1,2})\.(\d{1,2})(?:\.(\d{1,2}))?/);
  if (!m) return null;
  let t = m[1] + '.' + m[2];
  if (m[3]) t += '.' + m[3];
  return t;
}

function main() {
  const problems = [];
  const anomalies = [];
  const byChapter = {};
  let fileSeq = 0; // 全局序号，用于排序

  for (const dir of SOURCE_DIRS) {
    const mdPath = path.join(BASE_DIR, dir, 'full.md');
    const lines = fs.readFileSync(mdPath, 'utf8').split('\n');
    let curChapter = null;
    let curProb = null;
    let lastProbId = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const ct = line.match(/^##\s*第([一二三四五六七八九十]+)章\s*(.*)/);
      if (ct) {
        const ch = CHAP_NUM[ct[1]];
        if (ch) {
          curChapter = ch;
          if (!byChapter[ch]) byChapter[ch] = ct[2].trim();
        }
        continue;
      }

      // 识别题号：先剥离行首图注（处理 "图8.3.10 8.3.11 ..." 同行）
      let probId = null, isTwo = false, leadCaption = null;
      const leadCap = line.match(LEAD_CAPTION_RE);
      let work = line;
      if (leadCap) {
        leadCaption = leadCap[0].trim();
        work = line.slice(leadCap[0].length);
      }
      const m3 = work.match(THREE_RE);
      const m2 = work.match(TWO_RE);
      if (m3) { probId = m3[0]; isTwo = false; }
      else if (m2) { probId = m2[0]; isTwo = true; }

      if (probId) {
        const ch = parseInt(probId.split('.')[0], 10);
        if (isTwo && !TWO_LEVEL_CHAPS.has(ch)) probId = null;
        if (!isTwo && TWO_LEVEL_CHAPS.has(ch)) probId = null;
      }

      if (probId) {
        const rest = work.replace(probId, '').trim();
        // 续行：题号与上一题号相同且后续以"所示/图数字"开头 => 并入当前题目
        if (curProb && probId === lastProbId && /^(所示|图\s*\d)/.test(rest)) {
          curProb.text += ' ' + rest;
          if (leadCaption) curProb.pendingCaptions.push(leadCaption);
          continue;
        }
        // 新题开始
        if (curProb) problems.push(curProb);
        curProb = {
          id: probId,
          chapter: parseInt(probId.split('.')[0], 10),
          text: rest,
          inSolution: false,
          sourceDir: dir,
          line: i,
          seq: fileSeq++,
          pendingCaptions: leadCaption ? [leadCaption] : [],
        };
        lastProbId = probId;
        continue;
      }

      if (curProb) {
        if (!curProb.inSolution) {
          // 特例：源数据缺失【解】标记、解答直接混入的题目
          if (
            (curProb.id === '5.1.25' && /代入5\.1\.23题/.test(line)) ||
            (curProb.id === '2.3.72' && /高斯定理得/.test(line)) ||
            (curProb.id === '8.2.8' && line.trim() === '$$')
          ) {
            curProb.inSolution = true;
            continue;
          }
          if (SOLUTION_MARK.test(line.trim())) {
            curProb.inSolution = true;
            continue;
          }
          // 行内任意位置出现解答标记（MinerU 常把【解】解析进公式环境：\text{【解】}、{\mathrm{【解】}} 等）
          const inlineMark = line.match(/【\s*(解|证|解答|论证)\s*[】\}\]\s]*/);
          if (inlineMark) {
            curProb.inSolution = true;
            // 若【解】位于公式环境（\text / \mathrm / \begin{array} 内），其所在公式块为解答，回退删除最近 $$ 起的未闭合公式块
            if (/\\text\s*\{|\\mathrm\{|\\begin\{array\}/.test(line)) {
              const lines = curProb.text.split('\n');
              let cutIdx = -1;
              for (let li = lines.length - 1; li >= 0; li--) {
                if (lines[li].trim() === '$$') { cutIdx = li; break; }
              }
              if (cutIdx >= 0) {
                curProb.text = lines.slice(0, cutIdx).join('\n');
                continue;
              }
            }
            const before = line.slice(0, inlineMark.index).trim();
            if (before) curProb.text += '\n' + before;
            continue;
          }
          curProb.text += '\n' + line;
        }
      }
    }
    if (curProb) problems.push(curProb);
  }

  // OCR 修正：0.2.22 => 6.2.22
  for (const p of problems) {
    if (p.id === '0.2.22') {
      p.id = '6.2.22';
      p.chapter = 6;
      anomalies.push({ type: 'ocr-fix', from: '0.2.22', to: '6.2.22', note: 'OCR 将 6 误识别为 0，解答引用"6.2.21题"' });
    }
  }

  const probMap = new Map();
  for (const p of problems) probMap.set(p.id, p);

  // ============ 图片归属：仅题目区内图片引用 ============
  // 从每个题目的题目区文本中提取图片引用（![](...)），只保留题目提及的图片；
  // 图注文字（如 图1.1.6(1)）取自图片行同行或下一行
  const assign = new Map(); // probId -> [{file, caption}]
  const CAP_RE = /图\s*(\d{1,2})\.(\d{1,2})(?:\.(\d{1,2}))?(?:\((\d+)\))?/;
  for (const p of problems) {
    const lines = p.text.split('\n');
    const list = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const imgs = [...line.matchAll(IMG_RE)];
      if (imgs.length === 0) continue;
      for (const m of imgs) {
        const file = m[1];
        // 图注：同行剩余部分 或 下一行
        let caption = null;
        const after = line.slice(m.index + m[0].length);
        const c1 = after.match(CAP_RE);
        if (c1) caption = c1[0];
        else {
          const nxt = (lines[i + 1] || '').trim();
          const c2 = nxt.match(CAP_RE);
          if (c2 && /^图\s*\d/.test(nxt)) caption = c2[0];
        }
        list.push({ file, caption });
      }
    }
    assign.set(p.id, list);
  }

  // 已知文本缺失题（跳过生成，但保留其图注匹配的图片到 anomalies 参考）
  const knownMissing = new Set(['1.1.13', '1.2.13']);
  for (const id of knownMissing) {
    const imgs = assign.get(id) || [];
    anomalies.push({ type: 'missing-text', id, note: '源数据中无该题题号行与题目文字（仅见图注引用），跳过生成', images: imgs.map(i => i.file.split('/').pop()) });
    assign.delete(id);
  }

  // 跨目录查找图片实际文件路径（MinerU 分段解析，同名 hash 图片可能位于其他目录 images/ 下）
  const resolveImg = (relPath) => {
    const name = path.basename(relPath);
    for (const d of SOURCE_DIRS) {
      const cand = path.join(BASE_DIR, d, 'images', name);
      if (fs.existsSync(cand)) return cand;
    }
    return null;
  };
  let imgMissing = 0;
  for (const [id, list] of assign) {
    for (const item of list) {
      const real = resolveImg(item.file);
      if (!real) { item.missing = true; imgMissing++; }
      else item.srcPath = real;
    }
  }
  if (imgMissing > 0) {
    anomalies.push({ type: 'missing-image', note: imgMissing + ' 张图片在全部源目录 images/ 下均不存在' });
  }

  // 排序：按题号数值序（章/节/题）
  const sortKey = (id) => id.split('.').map((n) => parseInt(n, 10).toString().padStart(3, '0')).join('.');
  const sortedProblems = [...problems].sort((a, b) => {
    const ka = sortKey(a.id), kb = sortKey(b.id);
    return ka < kb ? -1 : ka > kb ? 1 : 0;
  });

  const report = {
    total: sortedProblems.length,
    byChapter: {},
    chapterTitles: byChapter,
    problems: sortedProblems.map((p) => ({
      id: p.id,
      chapter: p.chapter,
      sourceDir: p.sourceDir,
      text: p.text,
      textLength: p.text.length,
      images: (assign.get(p.id) || []).map((i) => ({ file: i.file, caption: i.caption, srcPath: i.srcPath || null })),
    })),
    anomalies,
  };
  for (const p of sortedProblems) {
    report.byChapter[p.chapter] = (report.byChapter[p.chapter] || 0) + 1;
  }
  fs.writeFileSync('extract_report.json', JSON.stringify(report, null, 2), 'utf8');

  console.log('题目总数:', report.total);
  console.log('章节分布:', JSON.stringify(report.byChapter));
  console.log('异常:', anomalies.length, '条');
  for (const a of anomalies) console.log('  -', a.type, a.id || a.from);
  let imgTotal = 0;
  for (const p of sortedProblems) imgTotal += (assign.get(p.id) || []).length;
  console.log('归属图片总数:', imgTotal);
}

main();
