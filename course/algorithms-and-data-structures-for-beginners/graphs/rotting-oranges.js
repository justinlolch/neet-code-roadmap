/**
 * @param {number[][]} grid
 * @return {number}
 */
// rotten = 2, fresh = 1, empty = 0
var orangesRotting = function (grid) {
    let minute = 0;
    let fresh = 0;
    const queue = [];
    const COL = grid.length;
    const ROW = grid[0].length;
    for (let c = 0; c < COL; c++) {
        for (let r = 0; r < ROW; r++) {
            if (grid[c][r] === 2)
                queue.push([c, r]);
            if (grid[c][r] === 1)
                fresh++;
        }
    }

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    while (queue.length > 0 && fresh > 0) {
        const currentLength = queue.length;
        for (let i = 0; i < currentLength; i++) {
            const rotten = queue.shift();
            const [c, r] = rotten;
            directions.forEach((direction) => {
                const x = direction[0] + c;
                const y = direction[1] + r;
                if (Math.min(x, y) >= 0 && x < COL && y < ROW && grid[x][y] === 1) {
                    queue.push([x, y]);
                    grid[x][y] = 2;
                    fresh--;
                }
            });
        }
        minute++;
    }

    return fresh > 0 ? -1 : minute;
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])) // 4
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]])) // -1
console.log(orangesRotting([[0, 2]])) // 0
