/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const colorsCount = new Array(3).fill(0);

    for (let i = 0;i< nums.length; i++){
        colorsCount[nums[i]] += 1;
    }

    let j = 0;
    for (let i = 0; i<colorsCount.length; i++){
        let count = colorsCount[i];
        while (count > 0) {
            nums[j] = i;
            j++;
            count--;
        }
    }
};

sortColors([2, 0, 2, 1, 1, 0]);
