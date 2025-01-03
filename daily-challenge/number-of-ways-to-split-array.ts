function waysToSplitArray(nums: number[]): number {
    const leftPrefixSum: number[] = new Array(nums.length).fill(0);
    const rightPrefixSum: number[] = new Array(nums.length).fill(0);
    let sum: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i];
        leftPrefixSum[i] = sum;
    }

    sum = 0;
    for (let i: number = nums.length - 1; i >= 0; i--) {
        sum += nums[i];
        rightPrefixSum[i] = sum;
    }

    let ans: number = 0;
    for (let i: number = 0; i < nums.length - 1; i++) {
        const left: number = leftPrefixSum[i];
        const right: number = rightPrefixSum[i+1];
        if (left >= right)
            ans++;
    }

    return ans;
}

console.log(waysToSplitArray([10, 4, -8, 7])) // 2
console.log(waysToSplitArray([2, 3, 1, 0])) // 2

// 3/1/2025
