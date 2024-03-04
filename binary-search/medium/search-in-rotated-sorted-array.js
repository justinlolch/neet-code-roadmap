/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let leftPt = 0;
    let rightPt = nums.length - 1;

    while (leftPt <= rightPt) {
        const middlePt = (leftPt + rightPt) >> 1;
        const leftValue = nums[leftPt];
        const rightValue = nums[rightPt];
        const middleValue = nums[middlePt];

        if (middleValue === target)
            return middlePt;

        if (leftValue === target)
            return leftPt;

        if (rightValue === target)
            return rightPt;

        if (middleValue > leftValue) {
            if (leftValue < target && target < middleValue) {
                leftPt += 1;
                rightPt = middlePt - 1;
            } else {
                leftPt = middlePt + 1;
                rightPt -= 1;
            }
        } else {
            if (middleValue < target && rightValue > target) {
                rightPt -= 1;
                leftPt = middlePt + 1;
            }
            else {
                leftPt += 1;
                rightPt = middlePt - 1;
            }
        }
    }

    return -1;
};

console.log(search([3, 1], 2)) // -1
console.log(search([8, 9, 2, 3, 4], 9)) // 1
console.log(search([5, 1, 2, 3, 4], 1)) // 1
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 5)) // 1
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
console.log(search([1], 0)) // -1
console.log(search([1, 3], 2)) // -1
