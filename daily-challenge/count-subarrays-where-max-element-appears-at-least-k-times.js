/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let [max, maxCount] = [Math.max(...nums), 0];
    let leftPt = 0;
    let result = 0;

    for (let rightPt = 0; rightPt < nums.length; rightPt++) {
        if (nums[rightPt] === max)
            maxCount++;

        while (maxCount > k || (maxCount === k && nums[leftPt] !== max)) {
            if (nums[leftPt] === max)
                maxCount--;
            leftPt++;
        }
        if (maxCount === k)
            result += leftPt + 1;
    }
    return result;
};

console.log(countSubarrays([1, 3, 2, 3, 3], 2)) // 6
console.log(countSubarrays([1, 4, 2, 1], 3)) // 0

// 29/3/2024
