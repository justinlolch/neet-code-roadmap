/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let leftPt = 0;
    let min = Infinity;
    let sum = 0;

    for (let rightPt = 0; rightPt < nums.length; rightPt++) {
        sum += nums[rightPt];
        while (sum >= target) {
            min = Math.min(min, rightPt - leftPt + 1);
            sum -= nums[leftPt];
            leftPt += 1;
        }
    }

    return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])) // 2
console.log(minSubArrayLen(4, [1, 4, 4])) // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])) // 0
