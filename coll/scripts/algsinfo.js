var selCases = [];

var algsGroups = {
    "Antisunes": [1, 2, 3, 4, 5, 6],
    "Sunes": [7, 8, 9, 10, 11, 12],
    "L": [13, 14, 15, 16, 17, 18],
    "U": [19, 20, 21, 22, 23, 24],
    "T": [25, 26, 27, 28, 29, 30],
    "Pi": [31, 32, 33, 34, 35, 36],
    "H": [37, 38, 39, 40]
};

var algsInfo = {
    1: {
        "name": "Antisune 1",
        "a": "(R U2') (R2' F R F') U2' (R' F R F')",
        "a2": "",
    },
    2: {
        "name": "Antisune 2",
        "a": "(U2) R2 D R' U R D' R' U R' U' R U' R'",
        "a2": "",
    },
    3: {
        "name": "Antisune 3",
        "a": "(U2) R2 D R' U2 R D' R2 U' R U' R'",
        "a2": "",
    },
    4: {
        "name": "Antisune 4",
        "a": "(U2) R U2 R' U2 L' U R U' R' L",
        "a2": "",
    },
    5: {
        "name": "Antisune 5",
        "a": "R' U L U' R U L'",
        "a2": "(U2) L' U R U' L U R'",
    },
    6: {
        "name": "Antisune 6",
        "a": "R U' R' U2 R U' R' U2 R' D' R U R' D R",
        "a2": "",
    },
    7: {
        "name": "Sune 1",
        "a": "R U R' U R U2 R'",
        "a2": "",
    },
    8: {
        "name": "Sune 2",
        "a": "(U2) R U R' U R2 D R' U2 R D' R2'",
        "a2": "",
    },
    9: {
        "name": "Sune 3",
        "a": "L' R U R' U' L U2 R U2 R'",
        "a2": "",
    },
    10: {
        "name": "Sune 4",
        "a": "(U') R U R' U R U' R D R' U' R D' R2'",
        "a2": "",
    },
    11: {
        "name": "Sune 5",
        "a": "R U' L' U R' U' L",
        "a2": "",
    },
    12: {
        "name": "Sune 6",
        "a": "F' R U2 R' U2 R' F2 R U R U' R' F'",
        "a2": "",
    },
    13: {
        "name": "L 1",
        "a": "(U2) R' U' R U' R' U R U' R' U R U' R' U2 R",
        "a2": "",
    },
    14: {
        "name": "L 2",
        "a": "R' U2 R' D' R U2 R' D R2",
        "a2": "",
    },
    15: {
        "name": "L 3",
        "a": "(U) R U2 R D R' U2 R D' R2",
        "a2": "",
    },
    16: {
        "name": "L 4",
        "a": "(U) F R' F' r U R U' r'",
        "a2": "",
    },
    17: {
        "name": "L 5",
        "a": "F' r U R' U' r' F R",
        "a2": "",
    },
    18: {
        "name": "L 6",
        "a": "(U') R' U' R U R' F' R U R' U' R' F R2",
        "a2": "",
    },
    19: {
        "name": "U 1",
        "a": "(U2) R U R' U R U2 R2 U' R U' R' U2 R",
        "a2": "",
    },
    20: {
        "name": "U 2",
        "a": "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R",
        "a2": "",
    },
    21: {
        "name": "U 3",
        "a": "(U2) R2 D R' U2 R D' R' U2 R'",
        "a2": "",
    },
    22: {
        "name": "U 4",
        "a": "(U2) R' F2 R U2 R U2 R' F2 R U2 R'",
        "a2": "F R U' R' U R U R' U R U' R' F'",
    },
    23: {
        "name": "U 5",
        "a": "R2 D' R U2 R' D R U2 R",
        "a2": "",
    },
    24: {
        "name": "U 6",
        "a": "R2 D' R U R' D R U R U' R' U' R",
        "a2": "",
    },
    25: {
        "name": "T 1",
        "a": "(U) r U R' U' r' F R F'",
        "a2": "",
    },
    26: {
        "name": "T 2",
        "a": "(U') l' U' L U R U' r' F",
        "a2": "",
    },
    27: {
        "name": "T 3",
        "a": "(U2) R U2 R' U' R U' R2 U2 R U R' U R",
        "a2": "",
    },
    28: {
        "name": "T 4",
        "a": "R' F R U R' U' R' F' R2 U' R' U2 R",
        "a2": "",
    },
    29: {
        "name": "T 5",
        "a": "F R U R' U' R U' R' U' R U R' F'",
        "a2": "",
    },
    30: {
        "name": "T 6",
        "a": "R U' R2' D' r U2 r' D R2 U R'",
        "a2": "",
    },
    31: {
        "name": "Pi 1",
        "a": "R U2 R2' U' R2 U' R2' U2' R",
        "a2": "",
    },
    32: {
        "name": "Pi 2",
        "a": "(U) F U R U' R' U R U' R2 F' R U R U' R'",
        "a2": "R' F2 R U2 R U2 R' F2 U' R U' R'",
    },
    33: {
        "name": "Pi 3",
        "a": "(U) F U R U' R' U R U2 R' U' R U R' F'",
        "a2": "",
    },
    34: {
        "name": "Pi 4",
        "a": "R U R' U' R' F R2 U R' U' R U R' U' F'",
        "a2": "",
    },
    35: {
        "name": "Pi 5",
        "a": "r U' r' U' r U r' U' x' R2 U' R' U R' x",
        "a2": "(U2) L' U R U' L U' R' U' R U' R' or (U') R U R' U F' R U2 R' U2 R' F R",
    },
    36: {
        "name": "Pi 6",
        "a": "R U D' R U R' D R2 U' R' U' R2' U2' R",
        "a2": "(U) R U2 R' U' F' R U2 R' U' R U' R' F R U' R'",
    },
    37: {
        "name": "H 1",
        "a": "(U) R U2 R' U' R U R' U' R U' R'",
        "a2": "R' U' R U' R' U R U' R' U2 R",
    },
    38: {
        "name": "H 2",
        "a": "F R U' R' U R U2 R' U' R U R' U' F'",
        "a2": "",
    },
    39: {
        "name": "H 3",
        "a": "R' F' R U2 R U2 R' F U' R U' R'",
        "a2": "",
    },
    40: {
        "name": "H 4",
        "a": "(U) F R U R' U' R U R' U' R U R' U' F'",
        "a2": "",
    },
};