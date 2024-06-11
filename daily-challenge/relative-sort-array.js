/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    const set = new Set(arr2);
    const arr1Count = new Map();
    const end = [];
    for (const num of arr1) {
        if (!set.has(num)) {
            end.push(num);
        }
        arr1Count.set(num, (arr1Count.get(num) ?? 0) + 1);
    }
    end.sort((a, b) => a - b);

    const res = [];
    for (const num of arr2) {
        const count = arr1Count.get(num);
        for (let i = 0; i < count; i++)
            res.push(num);
    }

    return res.concat(end);
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])) // [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])) // [22,28,8,6,17,44]

// 11/6/2024
