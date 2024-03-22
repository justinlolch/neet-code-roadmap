/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    const n = grid.length;
    const queue = [[0, 0, 1]];
    const visit = new Set([`0-0`]);
    const directions = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];

    while (queue.length > 0) {
        const value = queue.shift();
        const [c, r, length] = value;
        if (Math.min(c, r) < 0 || Math.max(c, r) >= n || grid[c][r] === 1)
            continue;
        if (c === n - 1 && r === n - 1)
            return length;
        directions.forEach((direction) => {
            const newC = c + direction[0];
            const newR = r + direction[1];
            if (!visit.has(`${newC}-${newR}`)) {
                queue.push([newC, newR, length + 1]);
                visit.add(`${newC}-${newR}`);
            }
        })
    }
    return -1;
};

console.log(shortestPathBinaryMatrix([[0, 1], [1, 0]])) // 2
console.log(shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]])) // 4
console.log(shortestPathBinaryMatrix([[1, 0, 0], [1, 1, 0], [1, 1, 0]])) // -1
