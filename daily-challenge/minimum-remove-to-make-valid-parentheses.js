/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const parenthesesStack = [];
    const stringArray = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        stringArray.push(char);
        if (char==="(") {
            parenthesesStack.push({sign: char, index: stringArray.length-1});
        } else if (char === ")") {
            const lastChar = parenthesesStack[parenthesesStack.length-1];
            if (lastChar && lastChar.sign === "(") {
                parenthesesStack.pop();
            } else {
                stringArray.pop();
            }
        }
    }

    while (parenthesesStack.length !== 0) {
        const char = parenthesesStack.pop();
        stringArray[char.index] = undefined;
    }

    return stringArray.join('');
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)")) // "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d")) // "ab(c)d"
console.log(minRemoveToMakeValid("))((")) // ""

// 6/4/2024