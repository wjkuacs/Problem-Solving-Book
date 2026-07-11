#!/usr/bin/env python3
"""
Fix all figure names and references in the project.
1. Parse full.md to build mapping: hash -> problem label
2. Rename hash-named images in figures/ to proper names
3. Fix all hash-based references in tex files
"""

import re
import os
import shutil

BASE = r"/sessions/gracious-bold-brown/mnt/Work/Problem-Solving-Book/赵凯华电磁学做题本"
FULL_MD = r"/sessions/gracious-bold-brown/mnt/新概念物理题解-上册-赵凯华.pdf-44e44684-9832-44ab-bf20-35c79cd8f474/full.md"
FIGURES_DIR = os.path.join(BASE, "figures")

# ============================================================
# STEP 1: Parse full.md
# ============================================================
print("=" * 70)
print("STEP 1: Parsing full.md for image-to-label mappings")
print("=" * 70)

with open(FULL_MD, "r", encoding="utf-8") as f:
    lines = f.readlines()

img_pattern = re.compile(r'!\[.*?\]\((images/[0-9a-f]+\.jpg)\)')
label_pattern_next = re.compile(r'^\s*习题\s*(\d+-\d+[a-z]?)\s*$')
problem_pattern = re.compile(r'(\d+)-(\d+)\.')

hash_to_label = {}

for i, line in enumerate(lines):
    img_match = img_pattern.search(line)
    if not img_match:
        continue

    img_path = img_match.group(1)
    hash_name = os.path.basename(img_path).replace('.jpg', '')

    label_found = None

    # Look for label on the NEXT 1-3 non-empty lines
    for j in range(i+1, min(i+4, len(lines))):
        next_line = lines[j].strip()
        if not next_line:
            continue
        lm = label_pattern_next.match(next_line)
        if lm:
            label_found = f"习题{lm.group(1)}"
            break
        # Short line that is just a label (e.g. "习题1-4" with trailing spaces)
        if re.match(r'^习题\s*\d+-\d+[a-z]?$', next_line):
            label_found = re.sub(r'\s+', '', next_line)
            break
        break

    # If no label found on next lines, look backwards for problem context
    if not label_found:
        for j in range(i-1, max(i-30, -1), -1):
            prev_line = lines[j].strip()
            pm = problem_pattern.search(prev_line)
            if pm:
                label_found = f"习题{pm.group(1)}-{pm.group(2)}"
                break

    if label_found:
        label_found = re.sub(r'\s+', '', label_found)
        hash_to_label[hash_name] = label_found
        print(f"  L{i+1:5d}: {hash_name[:20]:20s} -> {label_found}")
    else:
        print(f"  WARNING L{i+1:5d}: {hash_name[:20]} -> NO LABEL")

print(f"\nTotal mappings: {len(hash_to_label)}")

# ============================================================
# STEP 2: Handle multiple images per problem (add a, b, c suffixes)
# ============================================================
label_counts = {}
for h, label in hash_to_label.items():
    label_counts[label] = label_counts.get(label, 0) + 1

# Use a stable order based on appearance in the file
hash_order = list(dict.fromkeys(hash_to_label.keys()))  # preserve insertion order
label_seen = {}
final_mapping = {}

for hash_name in hash_order:
    label = hash_to_label[hash_name]
    count = label_counts[label]
    if count == 1:
        final_mapping[hash_name] = label
    else:
        if label not in label_seen:
            label_seen[label] = 0
        suffix = chr(ord('a') + label_seen[label])
        label_seen[label] += 1
        final_mapping[hash_name] = f"{label}{suffix}"

print(f"\nMulti-figure labels:")
for label, count in sorted(label_counts.items()):
    if count > 1:
        hashes = [h for h in hash_order if hash_to_label[h] == label]
        names = [final_mapping[h] for h in hashes]
        print(f"  {label}: {count} figures -> {', '.join(names)}")

# ============================================================
# STEP 3: Rename/copy hash-named images
# ============================================================
print("\n" + "=" * 70)
print("STEP 3: Renaming hash-named images in figures/")
print("=" * 70)

hash_files = [f for f in os.listdir(FIGURES_DIR) if re.match(r'^[0-9a-f]{64}\.jpg$', f)]
print(f"Hash-named files in figures/: {len(hash_files)}")

renamed = 0
existed = 0
no_mapping = 0

for hash_file in hash_files:
    hash_name = hash_file.replace('.jpg', '')
    if hash_name not in final_mapping:
        no_mapping += 1
        print(f"  SKIP (no mapping): {hash_name[:20]}...")
        continue

    target_name = f"{final_mapping[hash_name]}.jpg"
    target_path = os.path.join(FIGURES_DIR, target_name)
    source_path = os.path.join(FIGURES_DIR, hash_file)

    if os.path.exists(target_path):
        existed += 1
        continue

    shutil.copy2(source_path, target_path)
    renamed += 1

print(f"\nRenamed: {renamed}, Already existed: {existed}, No mapping: {no_mapping}")

# ============================================================
# STEP 4: Fix hash references in tex files
# ============================================================
print("\n" + "=" * 70)
print("STEP 4: Fixing hash-based references in tex files")
print("=" * 70)

tex_files = sorted([f for f in os.listdir(BASE) if f.endswith('.tex')])
hash_ref_pattern = re.compile(r'figures/([0-9a-f]{64})\.jpg')

for tex_file in tex_files:
    tex_path = os.path.join(BASE, tex_file)
    with open(tex_path, "r", encoding="utf-8") as f:
        content = f.read()

    matches = hash_ref_pattern.findall(content)
    if not matches:
        continue

    print(f"\n{tex_file}: {len(matches)} hash ref(s)")
    new_content = content
    for hash_name in sorted(set(matches)):
        if hash_name in final_mapping:
            target = f"figures/{final_mapping[hash_name]}.jpg"
            old = f"figures/{hash_name}.jpg"
            new_content = new_content.replace(old, target)
            print(f"  {hash_name[:20]}... -> {final_mapping[hash_name]}.jpg")
        else:
            print(f"  NO MAPPING: {hash_name[:20]}...")

    if new_content != content:
        with open(tex_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"  -> UPDATED")

# ============================================================
# STEP 5: Verification
# ============================================================
print("\n" + "=" * 70)
print("STEP 5: Verification")
print("=" * 70)

all_figures = os.listdir(FIGURES_DIR)
hash_remaining = [f for f in all_figures if re.match(r'^[0-9a-f]{64}\.jpg$', f)]
proper_named = [f for f in all_figures if re.match(r'^习题', f)]

print(f"Total files in figures/: {len(all_figures)}")
print(f"Hash-named remaining: {len(hash_remaining)}")
print(f"Properly named (习题*): {len(proper_named)}")

# Check tex files for remaining hash refs
print("\nRemaining hash refs in tex:")
for tex_file in tex_files:
    tex_path = os.path.join(BASE, tex_file)
    with open(tex_path, "r", encoding="utf-8") as f:
        content = f.read()
    remaining = hash_ref_pattern.findall(content)
    if remaining:
        print(f"  {tex_file}: {len(remaining)}")

# Check for missing files
print("\nMissing figure files:")
for tex_file in tex_files:
    tex_path = os.path.join(BASE, tex_file)
    with open(tex_path, "r", encoding="utf-8") as f:
        content = f.read()
    fig_refs = re.findall(r'figures/([^}]+\.jpg)', content)
    for ref in fig_refs:
        if not os.path.exists(os.path.join(FIGURES_DIR, ref)):
            print(f"  {tex_file} -> {ref}")

print("\nDone!")
