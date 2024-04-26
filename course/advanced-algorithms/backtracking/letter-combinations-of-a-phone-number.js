/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const keyMap = new Map([
        ["2", ["a", "b", "c"]],
        ["3", ["d", "e", "f"]],
        ["4", ["g", "h", "i"]],
        ["5", ["j", "k", "l"]],
        ["6", ["m", "n", "o"]],
        ["7", ["p", "q", "r", "s"]],
        ["8", ["t", "u", "v"]],
        ["9", ["w", "x", "y", "z"]]
    ]);
    const resultSets = [];

    const helper = (i, curSet) => {
        if (i >= digits.length) {
            const result = curSet.slice();
            if (result.length !== 0)
                resultSets.push(result.join(""));
            return;
        }

        const characters = keyMap.get(digits[i]);
        for (const char of characters) {
            curSet.push(char);
            helper(i + 1, curSet);
            curSet.pop();
        }
    };

    helper(0, []);
    return resultSets;
};

console.log(letterCombinations("23")) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")) // []
console.log(letterCombinations("2")) // ["a","b","c"]
