/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const charMap = new Map();
    let leftPt = 0;
    let maxLength = 0;
    let maxCharFreq = 0;

    for (let rightPt = 0; rightPt < s.length; rightPt++) {
        const validWindowSize = rightPt - leftPt + 1;
        const thisCharCurrentCount = charMap.get(s[rightPt]) ? charMap.get(s[rightPt]) + 1: 1;
        charMap.set(s[rightPt], thisCharCurrentCount);

        maxCharFreq = Math.max(maxCharFreq, thisCharCurrentCount);

        if ((validWindowSize - maxCharFreq) <= k) {
            maxLength = Math.max(maxLength, validWindowSize);
        } else {
            const leftChar = s[leftPt];
            charMap.set(leftChar, charMap.get(leftChar) - 1);
            // maxCharFreq = Math.max(...charMap.values());
            leftPt+=1;
        }
    }

    return maxLength;
};

console.log(characterReplacement("BAAAB",2)) // 5
console.log(characterReplacement("AAAA",2)) // 4
console.log(characterReplacement("ABAB",2)) // 4
console.log(characterReplacement("AABABBA",1)) // 4
