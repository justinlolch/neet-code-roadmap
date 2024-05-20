/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
    let sum = nums.reduce((acc, elem) => acc + elem, 0);
    const delta = nums.map(num => (num ^ k) - num);
    delta.sort((a, b) => b - a);

    for (let i = 0; i < delta.length; i += 2) {
        const nextIndex = i + 1;
        if (nextIndex === delta)
            continue;
        const currentValue = delta[i];
        const nextValue = delta[nextIndex];
        if ((currentValue + nextValue) > 0)
            sum += currentValue + nextValue;
    }

    return sum;
}

console.log(maximumValueSum([1, 2, 1], 3, [[0, 1], [0, 2]])) // 6
console.log(maximumValueSum([2, 3], 7, [[0, 1]])) // 9
console.log(maximumValueSum([7, 7, 7, 7, 7, 7], 3, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]])) // 42

// 19/5/2024
