/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    const parenthesesStack = [];
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(") {
            parenthesesStack.push(char);
        } else if (char === ")") {
            max = Math.max(max, parenthesesStack.length);
            parenthesesStack.pop();
        } else {
            max = Math.max(max, parenthesesStack.length);
        }
    }

    return max;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1")) // 3
console.log(maxDepth("(1)+((2))+(((3)))")) // 3

// 4/4/2024