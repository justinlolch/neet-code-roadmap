/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
    const charArray = [];

    for (let i = 0; i < 26; i++)
        charArray.push(0);

    const getMaxFreq = (index) => {
        return Math.max(...charArray.slice((index - k < 0) ? 0 : index - k, index + k + 1));
    };

    const charIndex = (char) => {
        return char.charCodeAt(0) - "a".charCodeAt(0);
    }

    for (let i = 0; i < s.length; i++) {
        const charPosition = charIndex(s[i]);
        const maxFreq = getMaxFreq(charPosition);
        charArray[charPosition] = maxFreq + 1;
    }

    return Math.max(...charArray);
};

console.log(longestIdealString("acfgbd", 2)) // 4
console.log(longestIdealString("abcd", 3)) // 4

// 25/4/2024
