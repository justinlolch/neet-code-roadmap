/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    const count = new Array(101).fill(0);

    for (const height of heights)
        count[height] = count[height] + 1;

    const expected = [];
    count.forEach((value, index) => {
        for (let i = 0; i < value; i++)
            expected.push(index);
    });

    let result = 0;
    for (let i = 0; i < expected.length; i++)
        if (heights[i] !== expected[i])
            result++;

    return result;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])) // 3
console.log(heightChecker([5, 1, 2, 3, 4])) // 5
console.log(heightChecker([1, 2, 3, 4, 5])) // 0

// 10/6/2024
