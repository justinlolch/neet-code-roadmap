/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operator = new Map([["+", (a, b) => a + b], ["-", (a, b) => a - b], ["*", (a, b) => a * b], ["/", (a, b) => parseInt(a/b)]]);
    const numberStack = [];
    for (const token of tokens) {
        if (!operator.has(token)){
            numberStack.push(parseInt(token));
        }
        else {
            const lastNumber = numberStack.pop();
            const secondLastNumber = numberStack.pop();
            const operation = operator.get(token);
            const num = operation(secondLastNumber, lastNumber);
            numberStack.push(num);
        }
    }
    return numberStack.pop();
};

console.log(evalRPN(["2","1","+","3","*"])) // 9
console.log(evalRPN(["4","13","5","/","+"])) // 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) // 22
console.log(evalRPN(["-78","-33","196","+","-19","-","115","+","-","-99","/","-18","8","*","-86","-","-","16","/","26","-14","-","-","47","-","101","-","163","*","143","-","0","-","171","+","120","*","-60","+","156","/","173","/","-24","11","+","21","/","*","44","*","180","70","-40","-","*","86","132","-84","+","*","-","38","/","/","21","28","/","+","83","/","-31","156","-","+","28","/","95","-","120","+","8","*","90","-","-94","*","-73","/","-62","/","93","*","196","-","-59","+","187","-","143","/","-79","-89","+","-"])) // 165
