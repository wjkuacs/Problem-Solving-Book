#!/usr/bin/env python3
"""Fix unlabeled images by copying hash files to proper descriptive names."""
import os, shutil

FIGURES_DIR = r"/sessions/gracious-bold-brown/mnt/Work/Problem-Solving-Book/赵凯华电磁学做题本/figures"

# Mapping: hash_prefix -> descriptive label
# Based on manual analysis of full.md context
unlabeled = {
    # Line 423: Problem 1-26, U-x curve
    "4344aa21aa6be7424913e9f782afbf1a303bf28296bb4a16e2463ffdfca9da8f": "习题1-26",
    # Line 429: Problem 1-27, oscilloscope figure
    "8288606ac65e48b044b9fdc7d49a615e9cb6fc494b523ef50bd0ad45c7360f8d": "习题1-27",
    # Line 712: Problem 1-38, E-r curve
    "5a30eeee15412d73b6464b58ee988a2265a1556409bbfec986d22d663081a812": "习题1-38",
    # Line 841: Problem 1-42, PN junction E-x curve (second figure for 1-42)
    "c4917def57b6580c24ca0ca2cc7605cb7e161a7da4704fbf67b384e44b9a1f41": "习题1-42c",
    # Line 916: Problem 1-43 (PN junction, charge distribution)
    "1b9893e37c3ba371cb179e00f652e3fd5bd301705013d195934dc362554e1980": "习题1-43",
    # Line 3957: Problem 4-35, second figure (B/H curves in magnetic medium)
    "f18b9cad692ef26e05c5171faedab9c51e149c0817850a8ed0c66f56c4ad5e77": "习题4-35b",
    # Line 5847: Problem 5-52, fourth figure
    "08a7227987b66ccf10f9d2e3739fd1775209c89dd746618b1a1b08314fdc3a6e": "习题5-52d",
    # Line 6434: Problem 5-78, second figure (circuit diagram)
    "f8b40271e52a6ba7b90b6da21c07fc4fbb7ba01ddb53cc4121c12f82539a7085": "习题5-78b",
    # Line 6746: Problem 6-11, standing wave diagram
    "0878e9734e6864ca64c9dbec7b4d2bdcb1d8f56d061093abebd52031799b9cd3": "习题6-11",
    # Line 6824: Problem 6-12, voltage/current standing wave
    "59b78537d84490761f31308679f788edd2d52bf225261c23f8df2418d9917e25": "习题6-12",
    # Line 6920: Problem 6-13, standing wave diagram
    "44a5c3ef9a95aa0a4d750dce0320d30de473838fa61341ed4b89441c9c3a093c": "习题6-13",
}

copied = 0
for hash_name, label in unlabeled.items():
    src = os.path.join(FIGURES_DIR, f"{hash_name}.jpg")
    dst = os.path.join(FIGURES_DIR, f"{label}.jpg")
    if os.path.exists(src) and not os.path.exists(dst):
        shutil.copy2(src, dst)
        copied += 1
        print(f"Copied: {hash_name[:16]}... -> {label}.jpg")
    elif os.path.exists(dst):
        print(f"Already exists: {label}.jpg")
    else:
        print(f"MISSING source: {hash_name[:16]}...")

print(f"\nCopied {copied} files")
