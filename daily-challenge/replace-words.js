/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
    let longestWordLength = 0;
    const wordSet = new Set();

    for (const word of dictionary) {
        longestWordLength = Math.max(longestWordLength, word.length);
        wordSet.add(word);
    }

    const sentenceArray = sentence.split(' ');
    for (let i = 0; i < sentenceArray.length; i++) {
        const current = sentenceArray[i];
        for (let j = 1; j <= longestWordLength; j++) {
            const root = current.slice(0, j);
            if (wordSet.has(root)) {
                sentenceArray[i] = root;
                break;
            }
        }
    }

    return sentenceArray.join(' ');
};

console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")) // "the cat was rat by the bat"
console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs")) // "a a b c"

// 7/6/2024
