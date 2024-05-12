/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    const n = grid.length;
    const result = Array.from({length: n - 2}, () => Array(n - 2).fill(0));

    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 0], [0, 1], [1, -1], [1, 0], [1, 1]];

    for (let row = 1; row < n - 1; row++) {
        for (let col = 1; col < n - 1; col++) {
            const reach = directions.map(d => grid[row + d[0]][col + d[1]]);
            result[row - 1][col - 1] = Math.max(...reach);
        }
    }
    return result;
};

console.log(largestLocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]])) // [[9,9],[8,6]]
console.log(largestLocal([[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]])) // [[2,2,2],[2,2,2],[2,2,2]]

// 12/5/2024
