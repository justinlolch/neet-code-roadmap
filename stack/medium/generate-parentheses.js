/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const resultSet = [];
    const stack = [];

    const bracket = (openCount, closeCount) => {
        if (openCount === closeCount && openCount === n) {
            resultSet.push(stack.join(""));
            return;
        }

        if (openCount < n) {
            stack.push("(");
            bracket(openCount + 1, closeCount);
            stack.pop();
        }

        if (closeCount < openCount) {
            stack.push(")");
            bracket(openCount, closeCount + 1);
            stack.pop();
        }
    }

    bracket(0, 0, n);
    return resultSet;
};


console.log(generateParenthesis(3)) // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)) // ["()"]
