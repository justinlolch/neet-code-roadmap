function maxAscendingSum(nums: number[]): number {
    let max: number = nums[0];
    let cur: number = nums[0];

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i])
            cur += nums[i];
        else cur = nums[i];
        max = Math.max(cur, max);
    }

    return max;
}

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50])) // 65
console.log(maxAscendingSum([10, 20, 30, 40, 50])) // 150
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])) // 33
console.log(maxAscendingSum([100, 10, 1])) // 100
console.log(maxAscendingSum([3,6,10,1,8,9,9,8,9])) // 19

// 4/2/2025
