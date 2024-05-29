/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    let steps = 0;
    let carry = 0;

    for (let i = s.length - 1; i >= 1; i--) {
        const digit = (parseInt(s[i]) + carry) % 2;
        if (digit === 0)
            steps += 1;
        else if (digit === 1) {
            carry = 1;
            steps += 2;
        }
    }

    return steps + carry;
};

console.log(numSteps("1111011110000011100000110001011011110010111001010111110001")) // 85
console.log(numSteps("1101")) // 6
console.log(numSteps("10")) // 1
console.log(numSteps("1")) // 0

// 29/5/2024
