/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const prefixMap = new Map([[0, 1]]);
    let sum = 0;
    let result = 0;

    for (const num of nums) {
        sum += num;
        let target = sum - k;
        if (prefixMap.has(target))
            result += prefixMap.get(target);

        prefixMap.set(sum, prefixMap.has(sum) ? prefixMap.get(sum) + 1 : 1);
    }

    return result;
};

console.log(subarraySum([1, -1, 0], 0)) // 3
console.log(subarraySum([1, 1, 1], 2)) // 2
console.log(subarraySum([1, 2, 3], 3)) // 2
