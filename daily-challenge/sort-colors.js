/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let [zeroes, ones, twos] = [0, 0, 0];

    for (const num of nums) {
        if (num === 0)
            zeroes++;
        else if (num === 1)
            ones++;
        else twos++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (zeroes !== 0) {
            nums[i] = 0;
            zeroes--;
        } else if (ones !== 0) {
            nums[i] = 1;
            ones--;
        } else {
            nums[i] = 2;
            twos--;
        }
    }
};

console.log(sortColors([2, 0, 2, 1, 1, 0])) // [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])) // [0,1,2]

// 12/6/2024
