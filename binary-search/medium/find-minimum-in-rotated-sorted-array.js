/**
 * @param {number[]} nums
 * @return {number}
 *
 * Normal case
 * sorted array left = minimum
 *
 * 3 5 2
 * left < middle, right < middle
 *
 * 5 2 3
 * left > middle, right > middle
 *
 */

var findMin = function(nums) {
    let leftPt = 0;
    let rightPt = nums.length - 1;
    let min = Math.min(nums[leftPt], nums[rightPt]);

    while (leftPt <= rightPt) {
        const middlePt = Math.floor((leftPt+rightPt)/2);
        const lv = nums[leftPt];
        const rv = nums[rightPt];
        const mv = nums[middlePt];

        min = Math.min(min, lv, rv, mv);

        if (mv >= lv && rv >= mv && rv >= lv)
            return min;

        if (lv <= mv && rv <= mv) {
            leftPt = middlePt + 1;
        }

        if (lv >= mv && rv >= mv) {
            rightPt = middlePt - 1;
            leftPt += 1;
        }
    }
    return min;
};

console.log(findMin([3,1,2])) // 1
console.log(findMin([3,4,5,1,2])) // 1
console.log(findMin([4,5,6,7,0,1,2])) // 0
console.log(findMin([11,13,15,17])) // 11
