/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        result += (s.charCodeAt(i) - 96);
    }

    while (k > 0) {
        let sum = 0;
        for (let i = 0; i < result.length; i++) {
            sum += parseInt(result[i]);
        }
        result = sum.toString();
        k--;
    }

    return parseInt(result);
};

console.log(getLucky("iiii", 1)) // 36
console.log(getLucky("leetcode", 2)) // 6
console.log(getLucky("zbax", 2)) // 8

// 3/9/2024
