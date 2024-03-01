/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPt = 0;
    let rightPt = nums.length - 1;

    while (leftPt <= rightPt) {
        const middle = Math.floor((leftPt+rightPt)/2);
        const current = nums[middle];
        if (current > target)
            rightPt = middle - 1;
        if (current < target)
            leftPt = middle + 1;
        if (current === target)
            return middle;
    }

    return -1;
};

console.log(search([-1,0,3,5,9,12],9)) // 4
console.log(search([-1,0,3,5,9,12],2)) // -1
console.log(search([5],5)) // 0
