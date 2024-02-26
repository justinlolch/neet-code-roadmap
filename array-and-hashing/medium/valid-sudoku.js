/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const columnMap = new Map();
    const rowMap = new Map();
    const boxMap = new Map(); // box key = {0-0}, {0-1}, {1-2}

    for (let row = 0; row < 9; row++) {
        if (!rowMap.has(row)){
            rowMap.set(row, new Set());
        }
        for (let col = 0; col < 9; col++) {
            let boardValue = board[row][col];
            if (boardValue == ".") {
                // skip if null value
                continue;
            }

            if (!columnMap.has(col)){
                columnMap.set(col, new Set());
            }

            const boxMapKey = `${Math.floor(row/3)}-${Math.floor(col/3)}`;
            if (!boxMap.has(boxMapKey)){
                boxMap.set(boxMapKey, new Set());
            }

            boardValue = parseInt(boardValue);
            const thisRowSet = rowMap.get(row);
            const thisColumnSet = columnMap.get(col);
            const thisBoxSet = boxMap.get(boxMapKey);

            if (thisRowSet.has(boardValue) || thisColumnSet.has(boardValue) || thisBoxSet.has(boardValue)){
                return false;
            }

            thisRowSet.add(boardValue);
            thisColumnSet.add(boardValue);
            thisBoxSet.add(boardValue);
        }
    }
    return true;
};

console.log(isValidSudoku(
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
)) // true

console.log(isValidSudoku(
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
)) // false
