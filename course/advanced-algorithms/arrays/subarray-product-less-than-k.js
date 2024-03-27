/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let product = 1;
    let l = 0;
    let count = 0;

    for (const index in nums) {
        product = product * nums[index];
        while (l <= index && product >= k) {
            product = product / nums[l];
            l++;
        }
        count += index - l + 1;
    }
    return count;
};

console.log(numSubarrayProductLessThanK([10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3], 19)) // 18
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)) // 8
console.log(numSubarrayProductLessThanK([1, 2, 3], 0)) // 0
