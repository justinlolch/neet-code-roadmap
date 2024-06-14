/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
    const count = new Map();
    let max = -Infinity;

    for (const num of nums) {
        max = Math.max(max, num);
        count.set(num, (count.get(num) ?? 0) + 1);
    }

    let minMoves = 0;

    for (let i = 0; i < max + nums.length; i++) {
        if (count.has(i) && count.get(i) > 1) {
            const extra = count.get(i) - 1;
            count.set(i + 1, (count.get(i + 1) ?? 0) + extra);
            minMoves += extra;
        }
    }

    return minMoves;
};

console.log(minIncrementForUnique([1, 2, 2])) // 1
console.log(minIncrementForUnique([2, 2, 2, 1])) // 3
console.log(minIncrementForUnique([3, 2, 1, 2, 1, 7])) // 6

// 14/6/2024
