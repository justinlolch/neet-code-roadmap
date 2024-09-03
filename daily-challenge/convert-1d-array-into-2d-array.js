/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    const result = [];

    if (m * n !== original.length)
        return result;

    let i = 0;
    result.push([]);
    while (i < original.length) {
        const lastLength = result[result.length - 1].length;
        if (lastLength < n)
            result[result.length-1].push(original[i]);
        else {
            result.push([original[i]]);
        }
        i++;
    }

    return result;
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2)) // [[1,2],[3,4]]
console.log(construct2DArray([1, 2, 3], 1, 3)) // [[1,2,3]]
console.log(construct2DArray([1, 2], 1, 1)) // []

// 1/9/2024
