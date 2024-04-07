/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let [leftParentheses, rightParenthesis] = [0,0];

    for (let i = 0; i < s.length; i++) {
        const leftPt = i;
        const rightPt = s.length - 1 - i;
        if (s[leftPt] === "(" || s[leftPt] === "*")
            leftParentheses += 1;
        else leftParentheses  -= 1;

        if (s[rightPt] === ")" || s[rightPt] === "*")
            rightParenthesis +=1;
        else rightParenthesis -= 1;

        if (leftParentheses < 0 || rightParenthesis < 0)
            return false;
    }

    return true;
};

console.log(checkValidString("((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()")) // true
console.log(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())")) // false
console.log(checkValidString("()")) // true
console.log(checkValidString("(*)")) // true
console.log(checkValidString("(*))")) // true
console.log(checkValidString("*))")) // false

// 7/4/2024