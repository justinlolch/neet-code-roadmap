/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
    let [curMax, curMin, gMax, gMin] = [0, 0, nums[0], nums[0]];
    let total = 0;

    for (const num of nums) {
        curMax = Math.max(curMax + num, num);
        curMin = Math.min(curMin + num, num);
        total += num;
        gMax = Math.max(curMax, gMax);
        gMin = Math.min(curMin, gMin);
    }

    return gMax > 0 ? Math.max(gMax, total - gMin) : gMax;
};

console.log(maxSubarraySumCircular([-9, 14, 24, -14, 12, 18, -18, -10, -10, -23, -2, -23, 11, 12, 18, -9, 9, -29, 12, 4, -8, 15, 11, -12, -16, -9, 19, -12, 22, 16])) // 99
console.log(maxSubarraySumCircular([3, 1, 3, 2, 6])) // 15
console.log(maxSubarraySumCircular([9, -4, -7, 9])) // 18
console.log(maxSubarraySumCircular([1, -2, 3, -2])) // 3
console.log(maxSubarraySumCircular([5, -3, 5])) // 10
console.log(maxSubarraySumCircular([-3, -2, -3])) // -2
