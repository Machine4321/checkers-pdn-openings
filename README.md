# Checkers PDN 3.0 Notation, 1–32 Board Coordinate Map & Classical Openings Dataset

An open-source reference and JavaScript utility for **Portable Draughts Notation (PDN 3.0)**, official WCDF **1–32 dark-square board indexing**, and the **18 Classical Go-As-You-Please (GAYP) Master Checkers Openings**.

🌐 **Live Documentation Page:** [https://machine4321.github.io/checkers-pdn-openings/](https://machine4321.github.io/checkers-pdn-openings/)  
♟️ **Interactive 3400+ Elo AI Checkers Solver:** [https://nextcheckersmove.com/](https://nextcheckersmove.com/)  
📖 **Interactive 18-System Openings Explorer:** [https://nextcheckersmove.com/openings.html](https://nextcheckersmove.com/openings.html)  

---

## 1. Official 1–32 Checkers Square Numbering (WCDF / PDN Standard)

Standard 8×8 Checkers (English Draughts) uses only the 32 dark squares, numbered `1` through `32` starting from Black's back rank:

```text
Row 0 (Black King Row):   . [ 1]  . [ 2]  . [ 3]  . [ 4]
Row 1:                  [ 5]  . [ 6]  . [ 7]  . [ 8]  .
Row 2:                    . [ 9]  . [10]  . [11]  . [12]
Row 3 (Center):         [13]  . [14]  . [15]  . [16]  .
Row 4 (Center):           . [17]  . [18]  . [19]  . [20]
Row 5:                  [21]  . [22]  . [23]  . [24]  .
Row 6:                    . [25]  . [26]  . [27]  . [28]
Row 7 (Red King Row):   [29]  . [30]  . [31]  . [32]  .
```

---

## 2. Classical Master Openings (PDN Sequences)

| Opening | Category | Official PDN Moves | Interactive Board |
| :--- | :--- | :--- | :--- |
| **Old Fourteenth** | 11-15 Center | `1. 11-15 23-19 2. 8-11 22-17 3. 4-8` | [Open in Explorer](https://nextcheckersmove.com/openings.html#old-fourteenth) |
| **Single Corner** | 11-15 Center | `1. 11-15 22-18 2. 15x22 25x18` | [Open in Explorer](https://nextcheckersmove.com/openings.html#single-corner) |
| **The Cross** | 11-15 Center | `1. 11-15 23-18 2. 8-11 27-23` | [Open in Explorer](https://nextcheckersmove.com/openings.html#the-cross) |
| **The Glasgow** | 11-15 Center | `1. 11-15 23-19 2. 8-11 22-17 3. 11-16` | [Open in Explorer](https://nextcheckersmove.com/openings.html#glasgow) |
| **The Souter** | 11-15 Center | `1. 11-15 23-19 2. 9-14 22-17 3. 6-9` | [Open in Explorer](https://nextcheckersmove.com/openings.html#souter) |
| **Ayrshire Lassie** | 11-15 Center | `1. 11-15 24-20 2. 8-11 28-24` | [Open in Explorer](https://nextcheckersmove.com/openings.html#ayrshire-lassie) |
| **The Laird & Lady** | 11-15 Center | `1. 11-15 23-19 2. 8-11 22-17 3. 9-13` | [Open in Explorer](https://nextcheckersmove.com/openings.html#laird-and-lady) |
| **The Defiance** | 11-15 Center | `1. 11-15 23-19 2. 9-14 27-23` | [Open in Explorer](https://nextcheckersmove.com/openings.html#defiance) |
| **The Dyke** | Flank System | `1. 11-15 22-17 2. 15-19` | [Open in Explorer](https://nextcheckersmove.com/openings.html#dyke) |
| **The Bristol** | Flank System | `1. 11-16 24-20 2. 16-19` | [Open in Explorer](https://nextcheckersmove.com/openings.html#bristol) |
| **The Kelso** | Flank System | `1. 10-15 21-17 2. 11-16` | [Open in Explorer](https://nextcheckersmove.com/openings.html#kelso) |
| **Double Corner** | 9-14 System | `1. 9-14 22-18 2. 5-9 25-22` | [Open in Explorer](https://nextcheckersmove.com/openings.html#double-corner) |

---

## 3. Related Checkers & Draughts Resources

- **[Next Checkers Move — 3400+ Elo AI Checkers Solver](https://nextcheckersmove.com/)**: Browser-based SIMD128 NNUE engine, 6-piece endgame tablebases, AI Board Vision Scanner, and Trap Move Finder.
- **[Daily Checkers Tactical Puzzle & 60-Puzzle Vault](https://nextcheckersmove.com/puzzle.html)**: Daily multi-jump combinations and Puzzle Streak Survival mode.
- **[Checkers Game Review & CAPS Accuracy Analyzer](https://nextcheckersmove.com/review.html)**: Full post-game accuracy scoring and blunder detection.
- **[Play Checkers Online vs 35 AI Bots (100–3400+ Elo)](https://nextcheckersmove.com/play.html)**: Play against personality bots or challenge friends via instant link.
- **[World Checkers & Draughts Rules Guide](https://nextcheckersmove.com/rules.html)**: Complete rules comparison for American/English, Brazilian Damas, Russian Shashki, Italian, Spanish, German, and International 10×10 Draughts.
- **[Free Printable Checkers Board & Puzzle Worksheets (PDF)](https://nextcheckersmove.com/blog/printable-checkers-board-and-puzzles-pdf.html)**: Print 1–32 numbered boards and classroom puzzle sheets.

## License

MIT
