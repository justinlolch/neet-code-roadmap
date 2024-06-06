/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {

    const count = (word) => {
        const frequency = Array(26).fill(0);
        for (let char of word) {
            frequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return frequency;
    };

    const intersection = (freq1, freq2) => freq1.map((f1, idx) => Math.min(f1, freq2[idx]));

    let last = count(words[0]);
    for (let i = 1; i < words.length; i++) {
        last = intersection(last, count(words[i]));
    }

    const result = [];
    for (let i = 0; i < 26; i++) {
        while (last[i] > 0) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
            last[i]--;
        }
    }

    return result;
};

console.log(commonChars(["bella", "label", "roller"])) // ["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])) // ["c","o"]

// 5/6/2024
