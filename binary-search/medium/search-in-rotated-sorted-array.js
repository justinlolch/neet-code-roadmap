/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let leftPt = 0;
    let rightPt = nums.length - 1;
    let index = -1;

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

        if (target < middleValue) {
            if (middleValue > leftValue) {
                // left to middle pointer is sorted
                if (target > leftValue) {
                    // target is between left and middle pointer
                    leftPt += 1;
                    rightPt = middlePt - 1;
                } else {
                    // target is between middle and right pointer
                    leftPt = middlePt + 1;
                    rightPt -= 1;
                }
            } else {
                // right pointer is sorted
                if (target < rightValue) {
                    // target is between left and middle pointer
                    leftPt += 1;
                    rightPt = middlePt - 1;
                } else return -1;
            }
        } else {
            if (rightValue > middleValue) {
                // middle to right pointer sorted
                if (target < rightValue) {
                    // target is between middle and right pointer
                    leftPt = middlePt + 1;
                    rightPt -= 1;
                } else {
                    // target is between left and middle pointer
                    leftPt += 1;
                    rightPt = middlePt - 1;
                }
            } else {
                // left to middle pointer is sorted
                if (target > leftValue) {
                    // target is between middle and right pointer
                    rightPt -= 1;
                    leftPt = middlePt + 1;
                } else return -1;
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
