/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    const [map1, map2] = [new Map(), new Map()];

    for (let i = 0; i < target.length; i++) {
        map1.set(target[i], (map1.get(target[i]) ?? 0) + 1);
        map2.set(arr[i], (map2.get(arr[i]) ?? 0) + 1);
    }

    for (const key of map1.keys()) {
        if (map1.get(key) !== map2.get(key))
            return false
    }

    return true;
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])) // true
console.log(canBeEqual([7], [7])) // true
console.log(canBeEqual([3, 7, 9], [3, 7, 11])) // false

// 22/7/2024
