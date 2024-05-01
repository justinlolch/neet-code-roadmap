/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    const resultArr = [];
    let targetIndex;
    let [leftPt, rightPt] = [0, 0];

    for (let i = 0; i < word.length; i++) {
        if (targetIndex === undefined && word[i] === ch) targetIndex = i;
        resultArr.push(word[i]);
    }

    if (targetIndex === undefined)
        return word;

    rightPt = targetIndex;
    while (leftPt < rightPt) {
        const temp = resultArr[leftPt];
        resultArr[leftPt] = resultArr[rightPt];
        resultArr[rightPt] = temp;
        leftPt++;
        rightPt--;
    }

    return resultArr.join("");
};

console.log(reversePrefix("abcdefd", ch = "d")) // "dcbaefd"
console.log(reversePrefix("xyxzxe", ch = "z")) // "zxyxxe"
console.log(reversePrefix("abcd", ch = "z")) // "abcd"

// 1/5/2024
