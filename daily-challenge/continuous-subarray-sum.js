/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    const hashMap = new Map([[0, -1]]);
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        const remainder = currentSum % k;
        if (!hashMap.has(remainder))
            hashMap.set(remainder, i);
        else if (i - hashMap.get(remainder) > 1)
            return true;
    }

    return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6)) // true
console.log(checkSubarraySum([23, 2, 6, 4, 7], 6)) // true
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13)) // false

// 8/6/2024
