function maxAbsoluteSum(nums: number[]): number {
    let [minPre, maxPre] = [0, 0];
    let cur: number = 0;
    let res: number = 0;

    for (const n of nums) {
        cur += n;
        res = Math.max(res, Math.abs(cur - minPre), Math.abs(cur - maxPre));
        minPre = Math.min(cur, minPre);
        maxPre = Math.max(cur, maxPre);
    }

    return res;
}

console.log(maxAbsoluteSum([1, -3, 2, 3, -4])) // 5
console.log(maxAbsoluteSum([2, -5, 1, -4, 3, -2])) // 8

// 26/2/2025
