#!/bin/bash
# ============================================
# 力学做题本 编译脚本
# 用法: ./compile.sh          # 完整编译(两次xelatex)
#       ./compile.sh clean    # 清理辅助文件
#       ./compile.sh watch    # 持续编译(需要 inotifywait)
# ============================================

set -e
cd "$(dirname "$0")"

TEX_FILE="main.pdf"
TEX_SRC="main.tex"
LATEX="xelatex -interaction=nonstopmode -halt-on-error"

if [ "$1" = "clean" ]; then
    echo "=== 清理辅助文件 ==="
    rm -f *.aux *.log *.out *.toc *.synctex.gz
    echo "完成"
    exit 0
fi

echo "=== 第一遍编译 ==="
$LATEX "$TEX_SRC"

echo "=== 第二遍编译(生成目录/交叉引用) ==="
$LATEX "$TEX_SRC"

echo "=== 清理辅助文件 ==="
rm -f *.aux *.log *.out *.toc *.synctex.gz

echo ""
echo "=== 编译完成 ==="
echo "输出: $TEX_FILE ($(du -h "$TEX_FILE" | cut -f1))"
echo "页数: $(strings "$TEX_FILE" | grep -c '/Type /Page' | head -1)"
