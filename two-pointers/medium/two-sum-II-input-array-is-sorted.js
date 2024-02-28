/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// O(1) Space
var twoSum = function(numbers, target) {
    let leftPt = 0;
    let rightPt = numbers.length - 1;

    while (true) {
        let sum = numbers[leftPt] + numbers[rightPt];

        if (sum === target) {
            return [leftPt+1, rightPt+1];
        }

        if (sum > target) {
            rightPt -= 1;
            continue;
        }

        if (sum < target) {
            leftPt += 1;
            continue;
        }
    }
};

console.log(twoSum([2,7,11,15],9)) // [1,2]
console.log(twoSum([2,3,4],6)) // [1,3]
console.log(twoSum([-1,0],-1)) // [1,2]
