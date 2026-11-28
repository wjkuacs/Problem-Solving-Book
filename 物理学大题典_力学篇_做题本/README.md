# 《物理学大题典·力学篇》做题本

基于强元棨、程稼夫编著《物理学大题典 1 力学（上下册）》Markdown 文本整理的 LaTeX 做题本。

## 内容特点

- **覆盖范围**：第一章（质点运动学）至第十二章（狭义相对论力学），共 **1054 道** 题目（仅保留题干，剔除解答）。
- **一页一题**：每道题目独立成页，留有充足解题空白，方便打印或平板批注。
- **TikZ 矢量插图**：仅绘制题干部分引用的插图（共 **358 幅**，按章存放在 `figures/chapter1`–`figures/chapter12`），未在题干中引用的解答插图已忽略。

## 目录结构

```text
物理学大题典_力学篇_做题本/
├── main.tex              # 主文档
├── main.pdf              # 编译成品（1068 页）
├── chapters/             # 分章题目（ch01.tex ~ ch12.tex）
├── figures/              # 按章分类的 TikZ 题干插图（chapter1 ~ chapter12）
└── md/                   # 原始 Markdown 文本
```

## 编译方式

在当前目录下使用 `xelatex` 编译两轮以生成完整目录与书签：

```bash
xelatex main.tex
xelatex main.tex
```
