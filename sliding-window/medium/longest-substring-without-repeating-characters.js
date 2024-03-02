/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    let max = 0;
    const set= new Set();
    const subString = [];

    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            subString.push(s[i]);
            max = Math.max(max, subString.length);
        }
        else {
            // remove substring
            let shiftValue;
            do {
                shiftValue = subString.shift();
                set.delete(shiftValue);
            } while (shiftValue !== s[i]);
            set.add(s[i])
            subString.push(s[i]);
        }
    }

    return max;
};

console.log(lengthOfLongestSubstring("abba")) // 2
console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3
console.log(lengthOfLongestSubstring("aab")) // 2
