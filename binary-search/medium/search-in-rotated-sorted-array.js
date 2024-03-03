/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * 2 3 5
 * sorted array left = minimum
 *
 * 3 5 2
 * left < middle, right < middle
 *
 * 5 2 3
 * left > middle, right > middle
 *
 */
var search = function (nums, target) {
    let leftPt = 0;
    let rightPt = nums.length - 1;
    if (nums.length === 1) {
        if (target !== nums[0])
            return -1;
        else return 0;
    }

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

        if (target < middleValue && target < rightValue && target < leftValue) {
            // search in small sorted array
            if (leftValue > middleValue && rightValue > middleValue) {
                leftPt += 1;
                rightPt = middlePt - 1;
            }

            if (leftValue < middleValue && rightValue < middleValue) {
                leftPt = middlePt + 1;
                rightPt -= 1;
            }

            if (leftValue < middleValue && leftValue < rightValue) {
                rightPt = middlePt - 1;
                leftPt += 1;
            }

            if (!(leftValue > middleValue && rightValue > middleValue) &&
                !(leftValue < middleValue && rightValue < middleValue) &&
                !(leftValue < middleValue && leftValue < rightValue))
                return -1;
        } else {
            // search in big array
            if (leftValue > middleValue && rightValue > middleValue) {
                leftPt = middlePt + 1;
                rightPt -= 1;
            }

            if (leftValue < middleValue && rightValue < middleValue) {
                leftPt += 1;
                rightPt = middlePt - 1;
            }

            if (leftValue < middleValue && leftValue < rightValue) {
                rightPt -= 1;
                leftPt = middlePt + 1;
            }

            if (
                !(leftValue > middleValue && rightValue > middleValue) &&
                !(leftValue < middleValue && rightValue < middleValue) &&
                !(leftValue < middleValue && leftValue < rightValue)
            ) leftPt += 1;
        }

    }

    return -1;
};

console.log(search([4,5,6,7,8,1,2,3], 8)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 5)) // 1
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
console.log(search([1], 0)) // -1
console.log(search([1, 3], 2)) // -1
