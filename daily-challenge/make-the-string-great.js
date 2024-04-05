/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0) {
            if (Math.abs(stack[stack.length-1].charCodeAt(0) - s.charCodeAt(i)) === 32) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};

console.log(makeGood("leEeetcode")) // "leetcode"
console.log(makeGood("abBAcC")) // ""
console.log(makeGood("s")) // "s"

// 5/4/2024
