/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const row = grid[0].length;
    const col = grid.length;
    const visited = new Set();
    let maxArea = 0;

    const dfs = (c, r) => {
        if (c < 0 || r < 0 || c >= col || r >= row || grid[c][r] === 0 || visited.has(`${c}-${r}`)) {
            return 0;
        }
        visited.add(`${c}-${r}`);
        return (1 + dfs(c+1, r) + dfs(c-1, r) + dfs(c, r+1) + dfs(c, r-1));
    }

    for (let c = 0; c < col; c++) {
        for (let r = 0; r < row; r++) {
            if (grid[c][r] === 1) {
                const area = dfs(c, r);
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
};

console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]])) // 6
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]])) // 0
