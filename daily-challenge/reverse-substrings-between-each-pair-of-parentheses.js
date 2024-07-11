/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    const stack = [];
    const reverseStack = [];

    for (const char of s) {
        if (char === ")") {
            let lastChar = stack.pop();
            while (lastChar !== "(") {
                reverseStack.push(lastChar);
                lastChar = stack.pop();
            }
            while (reverseStack.length > 0) {
                stack.push(reverseStack.shift());
            }
        } else stack.push(char);
    }

    return stack.join('');
};

console.log(reverseParentheses("(abcd)")) // "dcba"
console.log(reverseParentheses("(u(love)i)")) // "iloveu"
console.log(reverseParentheses("(ed(et(oc))el)")) // "leetcode"

// 11/7/2024
