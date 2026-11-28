$ErrorActionPreference = "Stop"
Push-Location $PSScriptRoot
try {
    xelatex -interaction=nonstopmode -halt-on-error main.tex
    xelatex -interaction=nonstopmode -halt-on-error main.tex
} finally {
    Pop-Location
}
