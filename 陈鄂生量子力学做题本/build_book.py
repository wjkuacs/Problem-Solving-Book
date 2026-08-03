#!/usr/bin/env python3
"""
Build LaTeX problem book for 陈鄂生量子力学 from full.md.
One problem per page, \textbf{X-N} numbering.
"""
import re
import os

SRC = r"D:\Program Files\Mineru\新建文件夹\陈鄂生纯题干.pdf-eaedd46e-02a6-47a5-966e-05d49b3f6d12"
OUT = r"D:\Work\Problem-Solving-Book\陈鄂生量子力学做题本"

CHAPTER_NAMES = {
    1: "一维定态问题",
    2: "量子力学的基本原理",
    3: "表象理论",
    4: "中心力场与三维问题",
    5: "微扰论",
    6: "自旋与角动量",
    7: "全同粒子与二次量子化",
}

def read_full_md():
    with open(os.path.join(SRC, "full.md"), "r", encoding="utf-8") as f:
        return f.read()

def extract_problems(content):
    """
    Parse full.md and extract problems.
    Returns dict: { chapter_num: [ (prob_num, full_text), ... ] }
    """
    lines = content.split("\n")
    problems = {}  # chapter -> list of (prob_num, text_lines)
    current_chap = None
    current_prob = None
    current_lines = []

    prob_pattern = re.compile(r"^(?:##\s*)?(\d+)\.(\d+)\s")

    def flush_problem():
        nonlocal current_chap, current_prob, current_lines
        if current_chap is not None and current_prob is not None and current_lines:
            if current_chap not in problems:
                problems[current_chap] = []
            problems[current_chap].append((current_prob, "\n".join(current_lines)))

    for line in lines:
        m = prob_pattern.match(line)
        if m:
            flush_problem()
            chap = int(m.group(1))
            prob = int(m.group(2))
            current_chap = chap
            current_prob = prob
            # Remove the "## " prefix if present
            clean_line = re.sub(r"^##\s*", "", line)
            current_lines = [clean_line]
        elif current_chap is not None:
            # Check if this line starts a new problem without a chapter prefix
            # (shouldn't happen, but just in case)
            current_lines.append(line)

    flush_problem()
    return problems

def clean_problem_text(text):
    """
    Clean up a problem's text for LaTeX rendering.
    The text is already mostly LaTeX, but needs some adjustments.
    """
    # Remove leading/trailing whitespace
    text = text.strip()

    # Remove "解 (1)..." solutions that sometimes appear
    text = re.sub(r'\n解\s*\(1\).*$', '', text, flags=re.DOTALL)

    return text

def make_problem_block(chap_num, prob_num, text):
    """
    Create the LaTeX content for one problem.
    Uses \textbf{chap-prob} numbering.
    """
    text = clean_problem_text(text)

    # The problem number prefix like "1.1 " or "1.35 " is at the start
    # We want to replace it with \textbf{X-N} format
    # Remove existing number prefix
    text = re.sub(r'^\d+\.\d+\s*', '', text)

    # Build the LaTeX block
    # Use a minipage for each problem to keep it together
    header = f"\\textbf{{{chap_num}-{prob_num}}}\\quad "

    # Escape any problematic LaTeX that isn't inside $ or $$ or \begin
    # We need to be careful not to mess up LaTeX commands
    body = header + text

    return body

def build_chapter_tex(chap_num, chapter_name, problems_list):
    """
    Build a complete .tex file for one chapter.
    problems_list: list of (prob_num, text)
    """
    lines = []
    lines.append(f"\\chapter{{{chapter_name}}}")
    lines.append("")

    for i, (prob_num, text) in enumerate(problems_list):
        body = make_problem_block(chap_num, prob_num, text)

        lines.append("\\noindent")
        lines.append("\\vfill")
        lines.append("")
        # Wrap in a page environment for one-problem-per-page
        lines.append("\\begin{center}")
        lines.append("\\parbox{0.95\\textwidth}{")
        lines.append("\\noindent")
        lines.append(body)
        lines.append("}")
        lines.append("\\end{center}")
        lines.append("")
        lines.append("\\vfill")
        lines.append("")
        lines.append("\\newpage")

    return "\n".join(lines)

def build_main_tex(chapter_files):
    """Build the main.tex file that includes all chapter files."""
    lines = []
    lines.append(r"\documentclass[a4paper,12pt]{book}")
    lines.append(r"\usepackage[UTF8]{ctex}")
    lines.append(r"\usepackage{amsmath,amssymb}")
    lines.append(r"\usepackage{geometry}")
    lines.append(r"\geometry{left=2.5cm, right=2.5cm, top=3cm, bottom=3cm}")
    lines.append(r"\usepackage{fancyhdr}")
    lines.append(r"\usepackage{enumitem}")
    lines.append(r"\usepackage{graphicx}")
    lines.append(r"\usepackage[colorlinks=true,linkcolor=blue]{hyperref}")
    lines.append("")
    lines.append(r"\pagestyle{fancy}")
    lines.append(r"\fancyhf{}")
    lines.append(r"\fancyhead[LE]{\leftmark}")
    lines.append(r"\fancyhead[RO]{\rightmark}")
    lines.append(r"\fancyfoot[C]{\thepage}")
    lines.append("")
    lines.append(r"\renewcommand{\headrulewidth}{0.4pt}")
    lines.append(r"\renewcommand{\footrulewidth}{0.4pt}")
    lines.append("")
    lines.append(r"\newcommand{\prob}[2]{\textbf{#1}\quad #2\vfill\newpage}")
    lines.append("")
    lines.append(r"\begin{document}")
    lines.append("")
    lines.append(r"\title{\Huge 量子力学习题集}")
    lines.append(r"\author{\Large 陈鄂生}")
    lines.append(r"\date{}")
    lines.append(r"\maketitle")
    lines.append(r"\tableofcontents")
    lines.append(r"\newpage")
    lines.append("")

    for chap_num, fname in sorted(chapter_files):
        chap_name = CHAPTER_NAMES.get(chap_num, f"第{chap_num}章")
        lines.append(f"\\input{{{fname}}}")

    lines.append("")
    lines.append(r"\end{document}")

    return "\n".join(lines)

def main():
    print("Reading full.md...")
    content = read_full_md()

    print("Extracting problems...")
    problems = extract_problems(content)

    total = sum(len(v) for v in problems.values())
    print(f"Total problems: {total}")

    for chap in sorted(problems.keys()):
        probs = problems[chap]
        chap_name = CHAPTER_NAMES.get(chap, f"第{chap}章")
        print(f"  Chapter {chap} ({chap_name}): {len(probs)} problems "
              f"({probs[0][0]}-{probs[-1][0]})")

    # Generate chapter tex files
    chapter_files = []
    for chap_num in sorted(problems.keys()):
        chap_name = CHAPTER_NAMES.get(chap_num, f"第{chap_num}章")
        fname = f"chapter{chap_num}.tex"
        tex_content = build_chapter_tex(chap_num, chap_name, problems[chap_num])

        out_path = os.path.join(OUT, fname)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(tex_content)
        print(f"  Wrote {fname} ({len(problems[chap_num])} problems)")
        chapter_files.append((chap_num, fname))

    # Generate main.tex
    main_tex = build_main_tex(chapter_files)
    main_path = os.path.join(OUT, "main.tex")
    with open(main_path, "w", encoding="utf-8") as f:
        f.write(main_tex)
    print(f"\nWrote main.tex")

    # Print summary
    print(f"\nTotal: {total} problems across {len(problems)} chapters")
    print(f"Output directory: {OUT}")

if __name__ == "__main__":
    main()
