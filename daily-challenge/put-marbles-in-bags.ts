function putMarbles(weights: number[], k: number): number {
    if (k === 1) return 0;

    const splits: number[] = [];

    for (let i: number = 0; i < weights.length - 1; i++)
        splits.push(weights[i] + weights[i + 1]);

    splits.sort((a: number, b: number): number => a - b);

    const sum = (arr: number[]): number => {
        return arr.reduce((acc: number, cur: number): number => acc + cur, 0);
    }

    const i: number = k - 1;

    const max: number = weights[0] + weights[weights.length - 1] + sum(splits.slice(-i));
    const min: number = weights[0] + weights[weights.length - 1] + sum(splits.slice(0, i));

    return max - min;
}

console.log(putMarbles([1, 3, 5, 1], 2)) // 4
console.log(putMarbles([1, 3], 2)) // 0

// 31/3/2025
