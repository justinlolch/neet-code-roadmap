/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
    let [curMax, curMin] = [arrays[0][0], arrays[0][arrays[0].length - 1]];
    let res = 0;

    for (const arr of arrays) {
        const localMin = arr[0];
        const localMax = arr[arr.length - 1];
        res = Math.max(
            res,
            curMax - localMin,
            localMax - curMin
        );
        curMax = Math.max(curMax, localMax);
        curMin = Math.min(curMin, localMin);
    }

    return res;
};

console.log(maxDistance([[1, 2, 3], [4, 5], [1, 2, 3]])) // 4
console.log(maxDistance([[1], [1]])) // 0

// 16/8/2024
