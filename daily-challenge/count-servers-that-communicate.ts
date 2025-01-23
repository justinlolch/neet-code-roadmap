function countServers(grid: number[][]): number {
    const visited = new Set<string>();
    const c: number = grid[0].length;
    const r: number = grid.length;

    const bfs = (i: number, j: number): number => {
        const queue: [number, number][] = [[i, j]];
        visited.add(`${i}-${j}`);
        let count: number = 0;

        while (queue.length > 0) {
            const [x, y] = queue.shift()!;
            count++;

            for (let col: number = 0; col < c; col++) {
                if (grid[x][col] === 1 && !visited.has(`${x}-${col}`)) {
                    visited.add(`${x}-${col}`);
                    queue.push([x, col]);
                }
            }

            for (let row: number = 0; row < r; row++) {
                if (grid[row][y] === 1 && !visited.has(`${row}-${y}`)) {
                    visited.add(`${row}-${y}`);
                    queue.push([row, y]);
                }
            }
        }

        return count;
    };

    let result: number = 0;

    for (let i: number = 0; i < r; i++) {
        for (let j: number = 0; j < c; j++) {
            if (grid[i][j] === 1 && !visited.has(`${i}-${j}`)) {
                const serverCount: number = bfs(i, j);
                if (serverCount > 1) {
                    result += serverCount;
                }
            }
        }
    }

    return result;
}

console.log(countServers([[1, 0], [0, 1]])) // 0
console.log(countServers([[1, 0], [1, 1]])) // 3
console.log(countServers([[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]])) // 4

// 23/1/2025
