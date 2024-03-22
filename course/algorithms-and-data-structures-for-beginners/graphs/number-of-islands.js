/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const row = grid.length;
    const col = grid[0].length;

    const bfs = (r, c) => {
        const queue = [];
        const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        direction.forEach((d) => {
            const newR = r+d[0];
            const newC = c+d[1];
            queue.push([newR, newC]);
        })

        while (queue.length > 0) {
            const coordinate = queue.shift();
            const x = coordinate[0];
            const y = coordinate[1];
            if (!(x < 0 ||x >= row || y < 0 || y>= col || grid[x][y] === "0")){
                grid[x][y] = "0";
                bfs(x, y);
            }
        }
    };

    let islands = 0
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === "1") {
                bfs(r, c);
                islands++;
            }
        }
    }
    return islands;
};

console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
])) // 1
console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
])) // 3
