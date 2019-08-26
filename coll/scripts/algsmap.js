var collMap = {
  1: [
    "R U2 R' U' R U' R'",
    "L' U' L U' L' U2 L",
    "L U2 L' U' L U' L'"
  ],
  2: [
    "R' U' R U' R' U R' D' R U R' D R2",
    "L' U' L U' L' U L' D' L U L' D L2",
    "R' U2 F' R U R' U' R' F R2 U R' U R"
  ],
  3: [
    "L R' U' R U L' U2 R' U2 R",
    "R L' U' L U R' U2 L' U2 L",
    "R U R' F' R U2 R' U2 R' F R2 U' R'"
  ],
  4: [
    "R' U' R U R' F R U R' U' R' F' R2",
    "R' U' R U' R2 D' R U2 R' D R2",
  ],
  5: [
    "L' U R U' L U R'",
    "r' F R F' r U R'"
  ],
  6: [
    "R U R' F' R U2 R' U' R U' R' F R U' R'",
    "R' U' R U' L U' R' U L' U2 R",
    "L' U' L U' R U' L' U R' U2 L",
  ],
  7: [
    "L U L' U L U2 L'",
    "R' U2 R U R' U R",
    "L' U2 L U L' U L",
  ],
  8: [
    "L' U2 L U2 R U' L' U L R'",
    "R' U2 R U2 L U' R' U L' R",
  ],
  9: [
    "R2 D' R U2 R' D R2 U R' U R",
    "F R' U' R2 U' R2 U2 R2 U' R' F'",
    "B' U' R U R' B U R U2 R'",
  ],
  10: [
    "R' U' R U' R2 F' R U R U' R' F U2 R",
    "F R' U2 R F' R' F U2 F' R",
    "R2 D' R U' R' D R U' R U R' U R",
  ],
  11: [
    "R U R' F' R U2 R' U' R U' R' F R U' R'",
    "R' U' R U' L U' R' U L' U2 R",
    "L' U' L U' R U' L' U R' U2 L",
  ],
  12: [
    "R U R' F' R U2 R' U' R U' R' F R U' R'",
    "R' U' R U' L U' R' U L' U2 R",
    "L' U' L U' R U' L' U R' U2 L",
  ],
  13: [
    "R U2 R' U' R U R' U' R U R' U' R U' R'",
    "R' U' R U' R' U2 R U' R U R' U R U2 R'",
    "R U R' U R U' R' U R U' R' U R U2 R'",
  ],
  14: [
    "L' U2 L' D' L U2 L' D L2",
    "R' U2 R U R2 D' R U R' D R2",
    "r D r' U r D' r' U y R U2 R'",
  ],
  15: [
    "R' F' R U R' U' R' F R2 U' R' U2 R",
    "R' D' r U2 r' D R U2 R U R'",
    "L U2 L D L' U2 L D' L2",
  ],
  16: [
    "F l' U' L U l F' L'",
  ],
  17: [
    "F R U' R' U' R U2 R' U' F'",
    "r U R U' r' F R' F'",
  ],
  18: [
    "r U2 R2 F R F' R U2 r'",
    "F R U R' U' R U' R' U2 R U2 R' U' F'",
    "R2 F' R U R U' R' F R U' R' U R",
  ],
  19: [
    "R' U' R U' R' U2 R2 U R' U R U2 R'",
    "R U R' U' R U' R' U2 R U' R' U2 R U R'",
    "R U R' U R U2 R' U R U2 R' U' R U' R'",
  ],
  20: [
    "R2 F' R U R2 U' R' F R U' R2 U R2 U R'",
    "R' U' R F R2 D' R U R' D R2 U' F'",
    "L' U L U' F R' F R F2 L F' L' F",
  ],
  21: [
    "R' U L' U R U' L U2 R' U R",
    "R' U' R U' R' U2 R2 U' L' U R' U' L",
  ],
  22: [
    "F R U' R' U R U R' U R U' R' F'",
    "R U R2 U' R' F R U R2 U' R' F'",
  ],
  23: [
    "L2 D' L U2 L' D L U2 L",
    "L U' R U' L' U R' U2 L U' L'",
  ],
  24: [
    "R' U2 R F U' R' U' R U F'",
    "R' U2 R U2 R' F' R U R' U' R' F R2",
    "R U' R' U' R U R D R' U R D' R2",
  ],
  25: [
    "R U R' U R U2 R' U' R U2 R' U' R U' R'",
    "R U2 R' U' R U' R' U R U R' U R U2 R'",
    "R U R' U R U2 R' L' U' L U' L' U2 L",
  ],
  26: [
    "R' U R U2 R' L' U R U' L",
    "R U' R' U2 L R U' R' U L'",
    "U2 R U R2 F R U R U' R' F' R",
  ],
  27: [
    "F R F' r U R' U' r'",
    "R' F' r U R U' r' F",
  ],
  28: [
    "R U2 R' F2 R U2 R' U2 R' F2 R",
    "F U' L' U R2 U' L U R2 F'",
  ],
  29: [
    "R U R D R' U' R D' R2",
    "R' F' R U R' U' R' F R U R",
    "R U R' U' L' U R U' R' L",
  ],
  30: [
    "R' U R2 D r' U2 r D' R2 U' R",
    "R' U' R U' R' U R U R' F' R U R' U' R' F R2",
    "R' U' R U R2 D' R U2 R' D R2 U' R' U R",
  ],
  31: [
    "R U2 R2 U' R2 U' R2 U2 R",
    "f R U R' U' f' F R U R' U' F'",
    "L' U2 L2 U L2 U L2 U2 L'",
  ],
  32: [
    "R' F2 R U2 R U2 R' F2 U' R U' R'",
    "R' U2 R U R' U' R U2 L U' R' U R L'",
    "L' U' L U L F' L2 U' L U L' U' L U F",
  ],
  33: [
    "R' U' F' R U R' U' R' F R2 U2 R' U2 R",
    "R U2 R' U L' U2 R U R' U' R U' R' L",
  ],
  34: [
    "R' U2 R U R' U R2 U' L' U R' U' L",
    "R U R' U R U2 R' U' R U' L' U R' U' L",
  ],
  35: [
    "R U' L' U R' U L U L' U L",
    "R U R' U F' R U2 R' U2 R' F R",
    "L' U R U' L U' R' U' R U' R'",
  ],
  36: [
    "R2 D' R U R' D R U R U' R' U R U R' U R",
    "F R2 U' R U' R U' R' U2 R' U R2 F'",
    "R U2 R' U' F' R U2 R' U' R U' R' F R U' R'",
  ],
  37: [
    "R U R' U R U' R' U R U2 R'",
    "R' U' R U' R' U R U' R' U2 R",
    "L U L' U L U' L' U L U2 L'",
  ],
  38: [
    "R L' U' L U' L' U L U2 R' U L' U2 L",
  ],
  39: [
    "R U R' U R U L' U R' U' L",
    "R U R' U R U r' F R' F' r",
    "R' U' R U' R' U' L U' R U L'",
  ],
  40: [
    "F U R U' R' U R U' R' U R U' R' F'",
    "R U R' U y' R' U R U' R2 F R F' R",
    "R' U' R' F R F' R' F R F' R' F R F' U R",
  ],
};