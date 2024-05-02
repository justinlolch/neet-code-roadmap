/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            const reversed = word.substring(0, i + 1).split('').reverse().join("");
            const remaining = word.substring(i + 1, word.length);
            return reversed + remaining;
        }
    }
    return word;
};

console.log(reversePrefix("abcdefd", ch = "d")) // "dcbaefd"
console.log(reversePrefix("xyxzxe", ch = "z")) // "zxyxxe"
console.log(reversePrefix("abcd", ch = "z")) // "abcd"

// 1/5/2024
