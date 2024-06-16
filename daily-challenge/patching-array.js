/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
    let miss = 1;
    let min = 0;
    let i = 0;

    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i];
            i += 1;
        } else {
            miss += miss;
            min++;
        }
    }

    return min;
};

console.log(minPatches([1, 3], 6)) // 1
console.log(minPatches([1, 5, 10], 20)) // 2
console.log(minPatches([1, 2, 2], 5)) // 0

// 16/6/2024
