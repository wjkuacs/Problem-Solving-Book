# 舒幼生力学做题本 · 校订版

第一至第八章，共 **346 道习题**。一页一题，不含解答；169 幅插图以 TikZ 重绘，保留原题编号、A/B 分组与逐题 PDF 书签。

## 下载

**[完整做题本 PDF（347 页，含封面）](pdf/main.pdf)**

| 章节 | 题数 | 分章 PDF | 题干源文件 |
| --- | ---: | --- | --- |
| 第一章 质点运动学 | 37 | [下载](pdf/chapter_1.pdf) | [LaTeX](chapters/chapter_1.tex) |
| 第二章 牛顿定律、动量定理 | 34 | [下载](pdf/chapter_2.pdf) | [LaTeX](chapters/chapter_2.tex) |
| 第三章 机械能定理 | 38 | [下载](pdf/chapter_3.pdf) | [LaTeX](chapters/chapter_3.tex) |
| 第四章 角动量定理、天体运动 | 33 | [下载](pdf/chapter_4.pdf) | [LaTeX](chapters/chapter_4.tex) |
| 第五章 质心、刚体 | 56 | [下载](pdf/chapter_5.pdf) | [LaTeX](chapters/chapter_5.tex) |
| 第六章 流体 | 31 | [下载](pdf/chapter_6.pdf) | [LaTeX](chapters/chapter_6.tex) |
| 第七章 振动和波 | 67 | [下载](pdf/chapter_7.pdf) | [LaTeX](chapters/chapter_7.tex) |
| 第八章 狭义相对论 | 50 | [下载](pdf/chapter_8.pdf) | [LaTeX](chapters/chapter_8.tex) |

分章 PDF 沿用完整做题本的页码。

## 文件说明

| 路径 | 用途 |
| --- | --- |
| `main.tex` | 完整做题本入口与统一排版 |
| `chapters/` | 各章题干 |
| `tikzfigs/chapter_1/` ～ `chapter_8/` | 按章归类的 TikZ 插图 |
| `pdf/` | 可直接下载的正式 PDF |
| `source/` | 既有原始截图，供校对 |
| `build.mjs` | 完整做题本与分章 PDF 的编译脚本 |
| `build/`、`_work/` | 本地编译与校对文件，不提交到仓库 |

## 编译

需要 Node.js 22 或以上版本，以及提供 `xelatex` 命令的 TeX Live。在本目录运行：

```sh
node build.mjs           # 完整做题本及全部分章 PDF
node build.mjs main      # 仅完整做题本
node build.mjs 8         # 仅第八章
node build.mjs 1 2       # 指定多个章节
```

脚本执行两遍 XeLaTeX，将中间文件写入 `build/`，通过编译检查后更新 `pdf/`。题目整理依据为提供的原书截图，保留题目中的已知数值。

仓库中的 [另一同名目录](../舒幼生力学做题本/README.md) 为历史版本；后续校订以本目录为准。
