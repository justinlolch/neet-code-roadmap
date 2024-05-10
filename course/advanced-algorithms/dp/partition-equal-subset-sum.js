/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    const sum = nums.reduce((acc, elem) => acc + elem, 0);
    if (sum % 2 !== 0)
        return false;

    const target = sum / 2;
    let set = new Set([0]);
    for (const num of nums) {
        const dp = new Set();
        for (const value of set.values()){
            const tmp = value + num;
            if (tmp === target) return true;
            dp.add(value);
            dp.add(tmp);
        }
        set = dp;
    }
    return false;
};

console.log(canPartition([1, 2, 5])) // false
console.log(canPartition([1, 5, 11, 5])) // true
console.log(canPartition([1, 2, 3, 5])) // false
