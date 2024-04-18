/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let perimeter = 0;
    const visited = new Set();

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[0].length; row++) {
            if (visited.has(`${col}-${row}`))
                continue;

            if (grid[col][row] === 1) {
                directions.forEach(d => {
                    const newCol = col + d[0];
                    const newRow = row + d[1];
                    const isOutOfBound = newCol < 0 || newCol >= grid.length || newRow < 0 || newRow >= grid[0].length;
                    if (isOutOfBound || grid[newCol][newRow] === 0) {
                        perimeter++;
                        visited.add(`${newCol}-${newRow}`);
                    }
                });
            }
            visited.add(`${col}-${row}`);
        }
    }

    return perimeter;
};

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])) // 16
console.log(islandPerimeter([[1]])) // 4
console.log(islandPerimeter([[1, 0]])) // 4

// 18/4/2024
