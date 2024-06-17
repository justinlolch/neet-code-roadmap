/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    const maxPossible = Math.floor(Math.sqrt(c));
    let [left, right] = [0, maxPossible];

    while (left <= right) {
        const sum = left * left + right * right;

        if (sum === c)
            return true;

        if (sum < c)
            left++;
        else right--;
    }

    return false;
};

console.log(judgeSquareSum(5)) // true
console.log(judgeSquareSum(3)) // false

// 17/6/2024
