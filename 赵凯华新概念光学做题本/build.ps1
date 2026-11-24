$ErrorActionPreference = 'Stop'
Push-Location $PSScriptRoot
try {
    xelatex -interaction=nonstopmode -halt-on-error -file-line-error main.tex
    if ($LASTEXITCODE -ne 0) { throw 'XeLaTeX compilation failed.' }
    xelatex -interaction=nonstopmode -halt-on-error -file-line-error main.tex
    if ($LASTEXITCODE -ne 0) { throw 'XeLaTeX compilation failed.' }
} finally { Pop-Location }
