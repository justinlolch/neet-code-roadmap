/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    const stack = [];
    const count = new Map();
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        stack.push(nums[i]);
        let currentCount = (count.get(nums[i]) ?? 0) + 1;
        count.set(nums[i], currentCount);

        if (currentCount > k) {
            let leftMost;
            do {
                leftMost = stack.shift();
                count.set(leftMost, count.get(leftMost) - 1);
            } while (leftMost !== nums[i])
        }
        max = Math.max(stack.length, max);
    }

    return max;
};

console.log(maxSubarrayLength([1,4,4,3], 1)) // 2
console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)) // 6
console.log(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1)) // 2
console.log(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4)) // 4

// 28/3/2024
