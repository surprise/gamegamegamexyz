var cmllMap = {
    1: [
      "R U2 R' U' R U' R'",
      "r U2 R' U' R U' r'",
      "U2 L' U' L U' L' U2 L"
    ],
    2: [
      "R2 D R' U R D' R' U R' U' R U' R'",
      "R' U' R U' R' U R' D' R U R' D R2"
    ],
    3: [
      "F R U' R' U R U2 R' U' F'",
      "F' r U r' U2 r' F2 r"
    ],
    4: [
      "R U2 R' U2 R' F R F'",
      "r U2 r' U2 R' F R F'"
    ],
    5: [
      "R' U L U' R U L'",
      "R' F R F' r U r'",
      "r' F R F' r U R'"
    ],
    6: [
      "R U R' F' R U2 R' U' R U' R' F R U' R'",
      "R' U' R U' R' U R' F R F' U R",
      "L' U' L U' L F' L' F L' U2 L",
      "R U2 R' F R' F' R U' R U' R'"
    ],
    7: [
      "R U R' U R U' R' U R U2 R'",
      "R' U' R U' R' U R U' R' U2 R"
    ],
    8: [
      "R U R' U R U L' U R' U' L",
      "R' F' R U2 R U2 R' F U' R U' R'"
    ],
    9: [
      "R U2 R2 U' R U' R' U2 F R F'",
      "R' F2 D R2 U R2 D' F2 R",
      "R' F' R U2 R' F2 R U' F U F'"
    ],
    10: [
      "R' F R U2 R' F' R U F R U R' U F'",
      "F U R U' R' U R U' R' U R U' R' F'"
    ],
    11: [
      "R U2 R' U' R U' R' U2 R U R' U R U2 R'",
      "R' U' R U' R' U R U' R' U R U' R' U2 R",
      "F' R D2 R' F U2 F' R D2 R' F",
    ],
    12: [
      "F U2 F' U' R' F' R U' R' F' R",
      "R' F2 R' U' R F2 R' U R2",
      "L' U2 L' D' L U2 L' D L2",
    ],
    13: [
      "R' F' R U R' U' R' F R2 U' R' U2 R",
      "R' U' R U2 L' U R' U' L U' R",
      "l U R' D R U2 R' D' R U l'"
    ],
    14: [
      "R2 D R' U R D' R' U' R'"
    ],
    15: [
      "l' U R D' R' U' l B",
      "F' r U R' U' r' F R",
      "R' U r U f R' f'"
    ],
    16: [
      "r U2 R2 F R F' R U2 r'",
      "L' U2 R U' r' U2 R l U' R'"
    ],
    17: [
      "R U R' U' R' F R2 U' R' U' R U R' F",
      "R' U L' U2 R U' R' U2 R L"
    ],
    18: [
      "R2 D r' U r D' R2 U' F' U' F",
      "r' U' r' D' r U' r' D r U r' D' r U r' D r2"
    ],
    19: [
      "R U2 R2 U' R2 U' R2 U2 R",
      "U2 F' L' U' L U L' U' L U F",
      "f R U R' U' R U R' U' f'"
    ],
    20: [
      "l U R' D R U' R U' R2 D' R U l'",
      "R' U' R U' R' U2 R U' L' U R U' L U R'",
      "U2 L' U2 L U L' U' L U2 L F' L' F"
    ],
    21: [
      "R' F2 D R2 U' R2 D' F2 R",
      "F U' F' U R' F2 R U2 R' F R",
      "F R' F' U2 R U R' U R2 U2 R'"
    ],
    22: [
      "R U2 R' U2 R' F R2 U R' U' F'",
      "R U R' U R U2 R' U' R U' L' U R' U' L",
      "F' L F L' U2 L' U L U' L' U2 L"
    ],
    23: [
      "L' U R U' L U' R' U' R U' R'",
      "R' F R F' r U' R' U' R U' r'",
      "r' F R F' r U' R' U' R U' R'"
    ],
    24: [
      "R' U' R U' R' U F' U F R",
      "L' U' L U' L' U L F R U R' F'"
    ],
    25: [
      "r U R' U R U2 r'",
      "L' U2 L U L' U L",
      "l' U2 l U L' U L"
    ],
    26: [
      "r' F2 r U2 r U' r' F",
      "U2 R' U2 R U2 R f' U' f",
    ],
    27: [
      "F R' F' R U2 r U2 r'"
    ],
    28: [
      "R U R' U R U' R D R' U' R D' R2",
      "R2 D' R U' R' D R U' R U R' U R"
    ],
    29: [
      "L F' L' F l' U' l"
    ],
    30: [
      "R U R' U L' U R U' L U2 R'",
      "R U R' F' R U R' U R U2 R' F R U' R'",
      "R' U2 l U' R U l' U R' U R"
    ],
    31: [
      "R U2 R' U' R U' R2 U2 R U R' U R",
      "r U2 R' U' R U' r2 U2 R U R' U r",
      "R' U2 R2 B2 D B D' B R2 U2 R"
    ],
    32: [
      "R' U r U2 R2 F R F' r",
      "R' U r U2 R2 F R F' R",
      "r' U r' U2 l U' l' U2 r2 B'"
    ],
    33: [
      "R' F' r U R U' r' F",
      "r' F' r U r U' r' F",
      "F R U' R' U R U R' F'"
    ],
    34: [
      "F R' U' R F' R' U F' R",
      "R' D R U' R U R' U R' D' R",
      "F R U R' U' R U' R' U' R U R' F'"
    ],
    35: [
      "R U R D R' U' R D' R2",
      "r U R' U' L' U l F'"
    ],
    36: [
      "R' U R2 D r' U2 r D' R2 U' R",
      "R2 U' R F R' U R2 U' R' F' R",
      "R U' R' U' R U' R' F' U' F U2 R U R'"
    ],
    37: [
      "R' U' R U' R' U2 R2 U R' U R U2 R'",
      "F2 R U' R' U R U R2 F' R F'",
      "R U R' U R U2 R2 U' R U' R' U2 R"
    ],
    38: [
      "L U' R' U L' U2 F' U F R",
      "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R",
      "R' U L U' R U2 F U' F' L'"
    ],
    39: [
      "r U' r' U' r U' r' U' F' U2 F",
      "L F' L' U' L F' L' U' F' U2 F"
    ],
    40: [
      "R' F2 R U2 R U2 R' F2 R U2 R'",
      "R' F U' R F R' U R F'",
      "R' D R U' R U' R' U R' D' R"
    ],
    41: [
      "R' F R U R' F R U F U2 F'"
    ],
    42: [
      "F U R U' R' F'",
      "R' U' F' U F R"
    ]
};