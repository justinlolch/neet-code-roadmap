/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    const colL = grid.length;
    const rowL = grid[0].length;

    let res = Math.pow(2, rowL - 1) * colL;

    for(let j = 1; j < rowL; j++){
        let curr = 0;

        for(let i = 0; i < colL; i++){
            curr += grid[i][0] === grid[i][j] ? 1 : 0;
        }
        res += Math.max(curr, colL - curr) * Math.pow(2, rowL - 1 - j);
    }
    return res;
};

console.log(matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]])) // 39
console.log(matrixScore([[0]])) // 1

// 13/5/2024
