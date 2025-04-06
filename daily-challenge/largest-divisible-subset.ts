function largestDivisibleSubset(nums: number[]): number[] {
    nums.sort((a, b) => a - b);
    const dp: number[] = new Array(nums.length).fill(1);
    const prev: number[] = new Array(nums.length).fill(-1);

    let maxi: number = 0;

    for (let i: number = 1; i < nums.length; i++) {
        for (let j: number = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > dp[maxi]) {
            maxi = i;
        }
    }

    const res: number[] = [];
    let i: number = maxi;
    while (i >= 0) {
        res.push(nums[i]);
        i = prev[i];
    }

    return res.reverse();
}

console.log(largestDivisibleSubset([1, 2, 3])) // [1,2]
console.log(largestDivisibleSubset([1, 2, 4, 8])) // [1,2,4,8]

// 6/4/2025
