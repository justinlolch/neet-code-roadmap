/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    const curSets = [];
    let sum = 0;

    const helper = (i, curSets) => {
        if (i >= nums.length) {
            if (curSets.length !== 0) {
                let current;
                for (const value of curSets) {
                    if (current === undefined)
                        current = value;
                    else current ^= value;
                }
                sum += current;
            }
            return;
        }

        curSets.push(nums[i]);
        helper(i + 1, curSets);
        curSets.pop();
        helper(i + 1, curSets);
    }

    helper(0, curSets);
    return sum;
};

console.log(subsetXORSum([1, 3])) // 6
console.log(subsetXORSum([5, 1, 6])) // 28
console.log(subsetXORSum([3, 4, 5, 6, 7, 8])) // 480

// 19/5/2024
