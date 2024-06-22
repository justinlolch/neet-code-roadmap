/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let [leftPt, middlePt] = [0, 0];
    let res = 0;
    let oddNumberCount = 0;

    const isOddNumber = (n) => n % 2 !== 0;

    for (let rightPt = 0; rightPt < nums.length; rightPt++) {
        if (isOddNumber(nums[rightPt]))
            oddNumberCount++;

        while (oddNumberCount > k) {
            if (isOddNumber(nums[leftPt]))
                oddNumberCount--;
            leftPt++;
            middlePt = leftPt;
        }

        if (oddNumberCount === k) {
            while (!isOddNumber(nums[middlePt])) {
                middlePt++;
            }
            res += middlePt - leftPt + 1;
        }
    }
    return res;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3)) // 2
console.log(numberOfSubarrays([2, 4, 6], 1)) // 0
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)) // 16

// 22/6/2024
