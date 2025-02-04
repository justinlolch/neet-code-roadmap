function longestMonotonicSubarray(nums: number[]): number {
    let cur: number = 1;
    let res: number = 1;
    let increasing: number = 0;

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            if (increasing > 0)
                cur += 1;
            else {
                cur = 2;
                increasing = 1;
            }
        } else if (nums[i - 1] > nums[i]) {
            if (increasing < 0)
                cur += 1;
            else {
                cur = 2;
                increasing = -1;
            }
        } else {
            cur = 1;
            increasing = 0;
        }
        res = Math.max(res, cur);
    }
    return Math.abs(res);
}

console.log(longestMonotonicSubarray([1, 4, 3, 3, 2])) // 2
console.log(longestMonotonicSubarray([3, 3, 3, 3])) // 1
console.log(longestMonotonicSubarray([3, 2, 1])) // 3

// 3/2/2025
