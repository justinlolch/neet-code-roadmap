/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const map = new Map(); // {index -> {ones, zeros}}
    const dpCache = new Map();

    const countZeroesAndOnes = (str) => {
        let one = 0;
        let zero = 0;

        for (const char of str) {
            if (char === "1")
                one++;
            else zero++;
        }

        return {
            ones: one,
            zeroes: zero,
        }
    };

    const dp = (index, rZeroes, rOnes) => {
        if (index === strs.length)
            return 0;

        const key = `index${index}-m${rZeroes}-n${rOnes}`;
        if (dpCache.has(key))
            return dpCache.get(key);

        let requested;
        const stringKey = strs[index];

        if (map.has(stringKey))
            requested = map.get(stringKey);
        else {
            requested = countZeroesAndOnes(strs[index]);
            map.set(stringKey, requested);
        }

        let result;
        if (rZeroes < requested.zeroes || rOnes < requested.ones)
            result = dp(index + 1, rZeroes, rOnes);
        else
            result = Math.max(
                dp(index + 1, rZeroes - requested.zeroes, rOnes - requested.ones) + 1,
                dp(index + 1, rZeroes, rOnes)
            );
        dpCache.set(key, result);
        return result;
    }

    return dp(0, m, n);
};

console.log(findMaxForm(["011", "1", "11", "0", "010", "1", "10", "1", "1", "0", "0", "0", "01111", "011", "11", "00", "11", "10", "1", "0", "0", "0", "0", "101", "001110", "1", "0", "1", "0", "0", "10", "00100", "0", "10", "1", "1", "1", "011", "11", "11", "10", "10", "0000", "01", "1", "10", "0"], 44, 39)) // 45
console.log(findMaxForm(["11", "11", "0", "0", "10", "1", "1", "0", "11", "1", "0", "111", "11111000", "0", "11", "000", "1", "1", "0", "00", "1", "101", "001", "000", "0", "00", "0011", "0", "10000"], 90, 66)) // 29
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3)) // 4
console.log(findMaxForm(["10", "0", "1"], 1, 1)) // 2
