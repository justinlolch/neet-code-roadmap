/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    const map = new Map();

    const backtracking = (index, total) => {
        if (index === nums.length)
            return total === target ? 1 : 0;
        const key = `${index}-${total}`;
        if (map.has(key))
            return map.get(key);

        map.set(
            key,
            backtracking(index + 1, total + nums[index]) +
            backtracking(index + 1, total - nums[index])
        )
        return map.get(key);
    }

    return backtracking(0, 0);
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)) // 5
console.log(findTargetSumWays([1], 1)) // 1
