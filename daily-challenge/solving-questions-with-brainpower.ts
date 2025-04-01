function mostPoints(questions: number[][]): number {
    const n: number = questions.length;
    const dp: number[] = new Array(n + 1).fill(0);

    for (let i: number = n - 1; i >= 0; i--) {
        const [points, brainpower] = questions[i];

        const take: number = points + (i + brainpower + 1 < n ? dp[i + brainpower + 1] : 0);

        const skip: number = dp[i + 1];

        dp[i] = Math.max(take, skip);
    }

    return dp[0];
}

console.log(mostPoints([[3, 2], [4, 3], [4, 4], [2, 5]])) // 5
console.log(mostPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]])) // 7

// 1/4/2025
