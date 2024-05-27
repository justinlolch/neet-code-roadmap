/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    const count = Array.from({length: nums.length + 1}).fill(0);

    for (const num of nums) {
        const index = num < nums.length ? num : nums.length;
        count[index] += 1;
    }

    let totalRight = 0;
    for (let i = nums.length; i >= 0; i--) {
        totalRight += count[i];
        if (i === totalRight)
            return totalRight;
    }
    return -1;
};

console.log(specialArray([3, 5])) // 2
console.log(specialArray([0, 0])) // -1
console.log(specialArray([0, 4, 3, 0, 4])) // 3

// 27/5/2024
