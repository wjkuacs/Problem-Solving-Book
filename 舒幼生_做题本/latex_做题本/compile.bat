@echo off
REM ============================================
REM 力学做题本 编译脚本 (Windows)
REM 用法: compile.bat          完整编译
REM       compile.bat clean    清理辅助文件
REM ============================================

cd /d "%~dp0"
set PATH=D:\Code\texlive\2024\bin\windows;%PATH%

if "%1"=="clean" (
    echo === 清理辅助文件 ===
    del /q *.aux *.log *.out *.toc *.synctex.gz 2>nul
    echo 完成
    goto :eof
)

echo === 第一遍编译 ===
xelatex -interaction=nonstopmode -halt-on-error main.tex
if errorlevel 1 (
    echo *** 编译失败 ***
    pause
    goto :eof
)

echo === 第二遍编译 ===
xelatex -interaction=nonstopmode -halt-on-error main.tex
if errorlevel 1 (
    echo *** 编译失败 ***
    pause
    goto :eof
)

echo === 清理辅助文件 ===
del /q *.aux *.log *.out *.toc *.synctex.gz 2>nul

echo.
echo === 编译完成 ===
echo 输出: main.pdf
pause
