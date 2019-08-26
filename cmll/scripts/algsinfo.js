var selCases = [];

var algsGroups = {
    "Antisunes": [1, 2, 3, 4, 5, 6],
    "H": [7, 8, 9, 10],
    "L": [11, 12, 13, 14, 15, 16],
    "O": [17, 18],
    "Pi": [19, 20, 21, 22, 23, 24],
    "Sunes": [25, 26, 27, 28, 29, 30],
    "T": [31, 32, 33, 34, 35, 36],
    "U": [37, 38, 39, 40, 41, 42]
};

var algsInfo = {
    1: {
        "name": "Right Bar",
        "a": "R' U' R U' R' U2 R",
        "a2": ""
    },
    2: {
        "name": "Columns",
        "a": "(U2) R2 D R' U R D' R' U R' U' R U' R'",
        "a2": ""
    },
    3: {
        "name": "Back Slash",
        "a": "(U2) F' L F L' U2 L' U2 L",
        "a2": ""
    },
    4: {
        "name": "X Checkerboard",
        "a": "(U2) R U2 R' U2 R' F R F'",
        "a2": ""
    },
    5: {
        "name": "Forward Slash",
        "a": "(U2) L' U R U' L U R'",
        "a2": ""
    },
    6: {
        "name": "Left Bar",
        "a": "(U') R' U' R U' R' U R' F R F' U R",
        "a2": ""
    },
    7: {
        "name": "Columns",
        "a": "R U2 R’ U’ R U R’ U’ R U’ R’",
        "a2": "(U) R U R' U R U' R' U R U2 R'"
    },
    8: {
        "name": "Row",
        "a": "(U2) r U' r2' D' r U' r' D r2 U r'",
        "a2": ""
    },
    9: {
        "name": "Column",
        "a": "(U) R U2 R2 F R F' U2 R' F R F'",
        "a2": ""
    },
    10: {
        "name": "Rows",
        "a": "F R U R' U' R U R' U' R U R' U' F'",
        "a2": ""
    },
    11: {
        "name": "Pure",
        "a": "U' R U2 R' U' R U R' U' R U R' U' R U' R'",
        "a2": ""
    },
    12: {
        "name": "Back Commutator",
        "a": "R' U2 R' D' R U2 R' D R2",
        "a2": ""
    },
    13: {
        "name": "Front Commutator",
        "a": "(U) R U2 R D R' U2 R D' R2",
        "a2": ""
    },
    14: {
        "name": "Inverse",
        "a": "(U) F R' F' R U R U' R'",
        "a2": ""
    },
    15: {
        "name": "Mirror",
        "a": "(U) F R U' R' U' R U R' F'",
        "a2": ""
    },
    16: {
        "name": "Diag",
        "a": "(U') R' U' R U R’ F' R U R' U' R' F R2",
        "a2": "(U) R U2 R2 F R F R U2 R'"
    },
    17: {
        "name": "Adjacent Swap",
        "a": "(U) R U R' F' R U R' U' R' F R2 U' R'",
        "a2": ""
    },
    18: {
        "name": "Diagonal Swap",
        "a": "F R U' R' U' R U R' F' R U R' U' R' F R F'",
        "a2": ""
    },
    19: {
        "name": "Right Bar",
        "a": "F R U R' U' R U R' U' F'",
        "a2": ""
    },
    20: {
        "name": "Back Slash",
        "a": "(U) F R' F' R U2 R U' R' U R U2 R'",
        "a2": ""
    },
    21: {
        "name": "X Checkerboard",
        "a": "(U') R' F R U F U' R U R' U' F'",
        "a2": ""
    },
    22: {
        "name": "Forward Slash",
        "a": "R U2 R' U' R U R' U2 R' F R F'",
        "a2": ""
    },
    23: {
        "name": "Columns",
        "a": "(U’) r U' r2 D' r U r' D r2 U r'",
        "a2": ""
    },
    24: {
        "name": "Left Bar",
        "a": "(U') R' U' R' F R F' R U' R' U2 R",
        "a2": ""
    },
    25: {
        "name": "Left Bar",
        "a": "R U R' U R U2 R'",
        "a2": ""
    },
    26: {
        "name": "X Checkerboard",
        "a": "L' U2 L U2 L F' L' F",
        "a2": ""
    },
    27: {
        "name": "Forward Slash",
        "a": "F R' F' R U2 R U2 R'",
        "a2": ""
    },
    28: {
        "name": "Columns",
        "a": "R U R' U' R' F R F' R U R' U R U2 R'",
        "a2": ""
    },
    29: {
        "name": "Back Slash",
        "a": "R U' L' U R' U' L",
        "a2": ""
    },
    30: {
        "name": "Right Bar",
        "a": "(U2) R U R' U R' F R F' R U2 R'",
        "a2": ""
    },
    31: {
        "name": "Rows",
        "a": "F R' F R2 U' R' U' R U R' F2",
        "a2": ""
    },
    32: {
        "name": "Front Row",
        "a": "r' U r U2 R2 F R F' R",
        "a2": ""
    },
    33: {
        "name": "Right Bar",
        "a": "(U) L' U' L U L F' L' F",
        "a2": ""
    },
    34: {
        "name": "Back Row",
        "a": "r' D' r U r' D r U' r U r'",
        "a2": ""
    },
    35: {
        "name": "Left Bar",
        "a": "(U') R U R' U' R' F R F'",
        "a2": ""
    },
    36: {
        "name": "Columns",
        "a": "(U2) r2 D' r U r' D r2 U' r' U' r",
        "a2": ""
    },
    37: {
        "name": "Front Row",
        "a": "R2 F U' F U F2 R2 U' R' F R",
        "a2": ""
    },
    38: {
        "name": "Rows",
        "a": "(U') F R2 D R' U R D' R2 U' F'",
        "a2": ""
    },
    39: {
        "name": "Forward Slash",
        "a": "(U2) R2 D R' U2 R D' R' U2 R'",
        "a2": ""
    },
    40: {
        "name": "X Checkerboard",
        "a": "(U2) r U' r' U r' D' r U' r' D r",
        "a2": ""
    },
    41: {
        "name": "Backslash",
        "a": "R2 D' R U2 R' D R U2 R",
        "a2": ""
    },
    42: {
        "name": "Back Row",
        "a": "(U') F R U R' U' F'",
        "a2": ""
    }
};
