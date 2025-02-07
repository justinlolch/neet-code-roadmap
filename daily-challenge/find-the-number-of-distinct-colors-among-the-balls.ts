function queryResults(limit: number, queries: number[][]): number[] {
    const res: number[] = [];
    const ballColor = new Map<number, number>();
    const colorCount = new Map<number, number>();
    let distinctColor: number = 0;

    for (const [ball, color] of queries) {
        const prevColor: number | undefined = ballColor.get(ball);

        if (prevColor !== color) {
            if (prevColor !== undefined) {
                const prevCount: number = (colorCount.get(prevColor) ?? 0) - 1;
                colorCount.set(prevColor, prevCount);
                if (prevCount === 0) distinctColor--;
            }
            if ((colorCount.get(color) ?? 0) === 0) distinctColor++;
            colorCount.set(color, (colorCount.get(color) ?? 0) + 1);
        }

        ballColor.set(ball, color);
        res.push(distinctColor);
    }

    return res;
}

console.log(queryResults(4, [[1, 4], [2, 5], [1, 3], [3, 4]])) // [1,2,2,3]
console.log(queryResults(4, [[0, 1], [1, 2], [2, 2], [3, 4], [4, 5]])) // [1,2,2,3,4]

// 7/2/2025
