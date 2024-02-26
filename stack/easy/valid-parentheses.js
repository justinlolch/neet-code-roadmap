/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const validBracket = new Set(["()", "[]", "{}"]);
    const openBracket = new Set(["(", "[", "{"]);
    const stack = [];

    for (const bracket of s) {
        if (openBracket.has(bracket)) {
            stack.push(bracket);
        } else {
            const lastOpenBracket = stack.pop();
            const brackets = lastOpenBracket + bracket;
            if (!validBracket.has(brackets))
                return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false