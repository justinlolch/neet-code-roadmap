/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    let max = 0;
    const m = grid.length;
    const n = grid[0].length;

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const dfs = (i, j, visit) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0 || visit.has(`${i}-${j}`))
            return 0;

        visit.add(`${i}-${j}`)
        let localMax = grid[i][j];
        for (const direction of directions) {
            localMax = Math.max(localMax, grid[i][j] + dfs(i+direction[0], j+direction[1], visit));
        }
        visit.delete(`${i}-${j}`);
        return localMax;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0)
                continue;
            max = Math.max(max, dfs(i, j, new Set()))
        }
    }

    return max;
};

console.log(getMaximumGold([[1,0,7,0,0,0],[2,0,6,0,1,0],[3,5,6,7,4,2],[4,3,1,0,2,0],[3,0,5,0,20,0]])) // 60
console.log(getMaximumGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]])) // 24
console.log(getMaximumGold([[1, 0, 7], [2, 0, 6], [3, 4, 5], [0, 3, 0], [9, 0, 20]])) // 28

// 14/5/2024
