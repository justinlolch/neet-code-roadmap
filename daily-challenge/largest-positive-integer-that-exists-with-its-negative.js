/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    nums.sort((a, b) => a - b);
    let [leftPt, rightPt] = [0, nums.length - 1];

    while (leftPt < rightPt) {
        const LEFT = nums[leftPt];
        const RIGHT = nums[rightPt];

        if (LEFT * -1 === RIGHT)
            return RIGHT;

        if (LEFT * -1 > RIGHT)
            leftPt++;
        else rightPt--;

    }

    return -1;
};

console.log(findMaxK([-1, 2, -3, 3])) // 3
console.log(findMaxK([-1, 10, 6, 7, -7, 1])) // 7
console.log(findMaxK([-10, 8, 6, 7, -2, -3])) // -1

// 2/5/2024
