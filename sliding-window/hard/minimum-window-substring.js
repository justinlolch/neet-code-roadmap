/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 *
 */
var minWindow = function (s, t) {
    if (t.length > s.length) return "";

    const tMap = new Map();
    for (let i = 0; i < t.length; i++)
        tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1)

    const doneSet = new Set();

    let [leftPt, rightPt] = [0, 0];
    const sMap = new Map();
    let minimumString = "";
    let isMovingLeft = false;

    while (rightPt < s.length) {
        if (!isMovingLeft)
            sMap.set(s[rightPt], (sMap.get(s[rightPt]) ?? 0) + 1);
        if (sMap.get(s[rightPt]) === tMap.get(s[rightPt]))
            doneSet.add(s[rightPt]);

        const isSubValid = isSubstringValid(doneSet, tMap)
        if (isSubValid) {
            const currentString = s.slice(leftPt, (rightPt + 1));
            if (minimumString === "" || minimumString.length > currentString.length)
                minimumString = currentString;

            // see if the string can be shorter -> move left Pointer
            const leftPtWord = s[leftPt];
            const wordCount = sMap.get(leftPtWord) - 1;
            sMap.set(leftPtWord, wordCount);
            if (wordCount < tMap.get(leftPtWord))
                doneSet.delete(leftPtWord);
            leftPt += 1;
            isMovingLeft = true;
            continue;
        }

        rightPt += 1;
        isMovingLeft = false;
    }

    return minimumString;
};

const isSubstringValid = (doneSet, tMap) => doneSet.size === tMap.size;

console.log(minWindow("a", "b")) // ""
console.log(minWindow("ab", "A")) // ""
console.log(minWindow("ADOBECODEBANC", "ABC")) // "BANC"
console.log(minWindow("a", "a")) // "a"
console.log(minWindow("a", "aa")) // ""
