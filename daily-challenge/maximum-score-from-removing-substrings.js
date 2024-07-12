/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {

    const removePairs = (pair, score) => {
        let res = 0;
        let stack = [];

        for (const c of s) {
            if (c === pair[1] && stack.length && stack[stack.length - 1] === pair[0]) {
                stack.pop();
                res += score;
            } else {
                stack.push(c);
            }
        }

        s = stack.join('');
        return res;
    };

    let res = 0;
    const pair = x > y ? "ab" : "ba";
    res += removePairs(pair, Math.max(x, y));
    res += removePairs(pair.split('').reverse().join(''), Math.min(x, y));

    return res;

};

console.log(maximumGain("cdbcbbaaabab", x = 4, y = 5)) // 19
console.log(maximumGain("aabbaaxybbaabb", x = 5, y = 4)) // 20

// 12/7/2024
