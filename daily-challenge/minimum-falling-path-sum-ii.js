/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
    const sumGrid = [];
    const n = grid.length;

    for (let i = 0; i < n; i++) {
        const currentRow = [];
        for (let j = 0; j < n; j++) {
            if (sumGrid.length === 0)
                currentRow.push(grid[i][j]);
            else {
                const lastRow = sumGrid[sumGrid.length-1].slice();
                lastRow.splice(j, 1);
                let lastRowMin = Math.min(...lastRow);
                currentRow.push(grid[i][j]+lastRowMin);
            }
        }
        sumGrid.push(currentRow);
    }

    return Math.min(...sumGrid[sumGrid.length-1]);
};

console.log(minFallingPathSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // 13
console.log(minFallingPathSum([[7]])) // 7

// 25/4/2024
