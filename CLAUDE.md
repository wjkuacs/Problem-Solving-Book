# 做题本构建工作流（Reasonix Agent 执行手册）

本文件是 Reasonix agent 在本仓库执行"题目提取 → 构建做题本 → 推送 GitHub"任务的操作手册。所有生成文件必须 UTF-8 编码。

## 0. 环境与工具

- **Node.js**（v22+）：编写提取/生成脚本（仓库内已有 `extract.js` + `build_chapters.js` 模板可复用）
- **xelatex / latexmk**（texlive，`C:\Program Files\texlive\2026\bin\windows\`）：编译验证
- **git**：远程 `git@github.com:wjkuacs/Problem-Solving-Book.git`，分支 `main`
- **Python 不可用**：一律用 Node 而非 Python

## 1. 核心参数（执行前必须用 ask 工具向用户确认）

| 参数 | 说明 |
|---|---|
| `BASE_DIR` | 父目录（本仓库通常即 `D:\Work\Problem-Solving-Book`，除非用户指定） |
| `PROJECT_NAME` | 新做题本文件夹名（惯例 `<书名>做题本`，如 `电磁学千题解做题本`） |
| `SOURCE_DIRS` | 源目录列表（通常为 MinerU 解析目录，见 §2） |
| `PROBLEMS_PER_PAGE` | 每页题数（惯例 2，可 1~3） |

附带确认：标题页是否署作者（默认只写书名）、源数据缺失章节时是否补充源目录。

## 2. 源数据认知（MinerU 解析目录）

典型源目录结构（**无 .md 散文件、无 figures/，是 `full.md` + `images/`**）：

```
<xxx>.pdf-<uuid>/
├── full.md        # 全书文本（题目 + 【解】解答 + 图注 + 图片引用，混排）
└── images/        # hash 命名图片（如 aa27f7...jpg）
```

`full.md` 关键格式（必须理解才能精准提取）：

- **题号行**：行首 `x.y.z`（三级，多数章）或 `x.y`（两级，部分章如 3、7、9、10、11）。题目文字跟在题号后，可跨多行。
- **题目区边界**：题号行 → 首个解题标记（`【解】`/`【证】`/`【解答】`/`【论证】`）。之后是解答区，**必须剔除**。
- **解题标记变体**（MinerU 解析差异，全部要识别）：
  - 行首 `【解】`、`## 【解】`（markdown 标题前缀）
  - 空格变体 `【解   】`、OCR 误识别 `【解   } ]`
  - 被解析进公式环境：`\text{【解】}`、`{\mathrm{【解】}}`、`\begin{array}{r l} ... 【解】`
  - 解答区内标记 `【讨论】`/`【别解】`/`【别证】` 不是题目边界
- **图片引用**：`![](images/<hash>.jpg)`，图注格式 `图x.y.z(n)` / `图x.y(n)`。**图片常被 OCR 排到题目区外**（题号行之前或解答区内），归属必须按图注题号匹配，而非按位置。
- **章节标题**：`## 第X章 <名称>`（如 `## 第一章 静电学`）。

## 3. 执行步骤

### 步骤一：确认参数（ask）
见 §1，逐项确认后进入实施。

### 步骤二：初始化项目结构
在 `BASE_DIR` 下创建 `<PROJECT_NAME>/`，内含 `chapters/`、`figures/`，编写 `main.tex`：

```latex
\documentclass[12pt,a4paper,openany]{book}
\usepackage{ctex}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{esint}          % 提供 \oiint 等（题目公式可能用到）
\usepackage{geometry}
\geometry{left=2.2cm,right=2.2cm,top=2cm,bottom=2cm}
\usepackage{graphicx}
\usepackage{fancyhdr}
% ... 标题页仅书名（默认不署作者），\input{chapters/chapterN.tex}
```

### 步骤三：提取（Node 脚本）
解析各源目录 `full.md`，产出 `extract_report.json`（题号、章节、题目文本、图片清单含 `srcPath`、异常记录）。必须处理：

1. **题号识别**：两级/三级正则同时匹配；排除"题号 == 上一题号 且后续以 `所示`/`图数字` 开头"的 PDF 换行续行。
2. **同行图注+题号**：如 `图8.3.10 8.3.11 一螺绕环...`，剥离行首图注再识别题号。
3. **解答边界**：识别全部标记变体（见 §2）；若【解】在公式环境内，回退删除最近 `$$` 起的未闭合公式块；对源数据缺失【解】标记的题（如 `5.1.25`、`2.3.72`、`8.2.8`），按解答特征词（`代入...题`、`高斯定理得` 等）或首个 `$$` 硬编码截断。
4. **OCR 修正**：如 `0.2.22` → `6.2.22`（正文引用"6.2.21题"佐证）。
5. **图片归属**：全局扫描图片行，与其后最近未消费图注配对（行距 ≤8），按图注题号归属（**含解答区图注**）；题目区内无图注图片兜底归属当前题；跨目录查找 hash 图片实际文件（同名 hash 可能在其他源目录 `images/` 下）。
6. **文本缺失异常**：如 `1.1.13`、`1.2.13` 仅有图注无题目文字 → 记录 anomalies 并跳过生成，报告中列出。

**数学模式转义陷阱**：`$...$`/`$$...$$` 状态必须跨行保持，对整段文本一次性转义（不能逐行转义，否则 `\frac` 等被误转成 `\textbackslash{}frac`）；文本模式转义 `% & # _ { } ~ ^`，PDF 残留 `\-` 转成 `-`。

### 步骤四：生成章节与迁移图片
按章生成 `chapters/chapterN.tex`：

- 题目行：`\textbf{x.y.z.} ` 或 `\textbf{x.y.} ` + 题目文本
- 每题后必插 `\vfill`；每 `PROBLEMS_PER_PAGE` 题后插 `\newpage`
- 图片统一渲染在题末（删除文本内 `![](...)` 行与独立图注行），图注以 `\textit{...}` 呈现
- 图片重命名 `fig_x_y_z[_n].jpg`（两级题号 `fig_x_y[_n].jpg`；多图 `_1/_2` 从 1 开始），复制到 `figures/`
- **图片适配**：`\includegraphics[width=0.3\linewidth,height=0.6\textheight,keepaspectratio]{...}` —— 超高图自动收缩不超页，正常图保持 0.3 宽
- 移除题目内公式的 `\tag{...}`（`\tag{Ⅱ}` 全角参数会导致 xelatex 报错；做题本无需公式编号）

### 步骤五：编译验证
```bash
xelatex -interaction=nonstopmode -halt-on-error main.tex   # 跑两遍
```
验收：0 个 `^!` 错误、`Output written on main.pdf`、无缺失图片/文件警告；Overfull 文字段落警告可接受。完成后清理构建产物（`.gitignore` 已排除）。

### 步骤六：推送 GitHub
```bash
git add -A
git commit -m "<做题本名称>：N 道题目、M 章、K 张图片（...）"
git push origin main          # 被拒则 git push --force origin main
```
提交信息必须含做题本名称与题目数量统计。工作区其他未提交修改按 `git add -A` 一并提交。

## 4. 质量验收清单（提交前逐项核对）

- [ ] 题目总数、各章分布与源数据题号覆盖一致（缺失章节须向用户确认过）
- [ ] 每章题目文本不含解答内容（无 `【解】`/`【证】` 等标记混入）
- [ ] 每题后 `\vfill`，每 N 题 `\newpage`，N == PROBLEMS_PER_PAGE
- [ ] `includegraphics` 引用数 == `figures/` 文件数，一一对应、无缺失、无重名覆盖
- [ ] 图片命名 `fig_x_y_z[_n].jpg` 与题号严格对应
- [ ] xelatex 两遍编译 0 错误，main.pdf 正常生成
- [ ] `extract_report.json` 异常记录已审阅（OCR 修正、文本缺失题已知情）

## 5. 仓库既有做题本（命名/风格参照）

叶邦角电磁学、张汉壮力学、物理学难题集萃、电磁学千题解、舒幼生、赵凯华电磁学、陈鄂生量子力学 —— 均为 `main.tex` + `chapters/chapterN.tex` + `figures/` 结构，格式约定与本手册 §3-4 一致。
