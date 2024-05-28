/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {

    const calculateCost = (charA, charB) => {
        return Math.abs(charA.charCodeAt(0) - charB.charCodeAt(0));
    };

    let maxLength = 0;
    let currentCost = 0;

    let leftPt = 0;
    for (let rightPt = 0; rightPt < s.length; rightPt++) {
        currentCost += calculateCost(s[rightPt], t[rightPt]);

        while (currentCost > maxCost) {
            currentCost -= calculateCost(s[leftPt], t[leftPt]);
            leftPt++;
        }

        maxLength = Math.max(maxLength, rightPt - leftPt + 1);
    }

    return maxLength;
};

console.log(equalSubstring("krrgw", "zjxss", 19)) // 2
console.log(equalSubstring("abcd", "bcdf", 3)) // 3
console.log(equalSubstring("abcd", "cdef", 3)) // 1
console.log(equalSubstring("abcd", "acde", 0)) // 1

// 28/5/2024
