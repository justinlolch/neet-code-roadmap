function findMaxFish(grid: number[][]): number {
    const visited = new Set<string>();
    const [rows, cols] = [grid.length, grid[0].length];
    const directions: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let res: number = 0;

    const dfs = (r: number, c: number): number => {
        const key: string = `${r}-${c}`
        if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] === 0 || visited.has(key))
            return 0
        let fishes: number = grid[r][c];
        visited.add(key);
        directions.forEach((d: number[]): void => {
            fishes += dfs(r + d[0], c + d[1]);
        })
        return fishes;
    }

    for (let i: number = 0; i < rows; i++)
        for (let j: number = 0; j < cols; j++)
            res = Math.max(res, dfs(i, j))

    return res;
}

console.log(findMaxFish([[0, 2, 1, 0], [4, 0, 0, 3], [1, 0, 0, 4], [0, 3, 2, 0]])) // 7
console.log(findMaxFish([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1]])) // 1

// 28/1/2025
