/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let [sum, maxSum] = [-Infinity, -Infinity];

    for (const num of nums) {
        sum = Math.max(sum, 0);
        sum = sum + num;
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([5, 4, -1, 7, 8])) // 23
