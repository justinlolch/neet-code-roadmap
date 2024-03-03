/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);
    const subStringLength = s1.length;
    const baseASCII = "a".charCodeAt(0);

    for (let i = 0; i < subStringLength; i++)
        s1Count[s1.charCodeAt(i)-baseASCII] += 1;

    let leftPt = 0;
    let rightPt = leftPt;
    while (rightPt < s2.length) {
        s2Count[s2.charCodeAt(rightPt)-baseASCII] += 1;

        const windowSize = rightPt - leftPt + 1;
        if (windowSize === subStringLength) {
            if (isSame(s1Count, s2Count))
                return true
            else {
                // remove leftPt word
                s2Count[s2[leftPt].charCodeAt(0) - baseASCII] -= 1;
                leftPt += 1;
            }
        }

        rightPt += 1;
    }

    return false;
};

const isSame = (s1Count, s2Count) => {
    for (let i = 0; i < s1Count.length; i++) {
        if (s1Count[i] !== s2Count[i])
            return false;
    }
    return true;
}


console.log(checkInclusion("ab","eidbaooo")) // true
console.log(checkInclusion("ab","eidboaoo")) // false
console.log(checkInclusion("a","ab")) // true
