/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    const cache = new Map();
    const dfs = (s1Index, s2Index, s3Index) => {
        const key = `${s1Index}-${s2Index}-${s3Index}`;
        if (cache.has(key))
            return cache.get(key);

        if (s3Index >= s3.length)
            return s1Index >= s1.length && s2Index >= s2.length;
        if (s1Index >= s1.length)
            return s2Index < s2.length;
        if (s2Index >= s2.length)
            return s1Index < s1.length;

        const s1Value = s1[s1Index];
        const s2Value = s2[s2Index];
        const s3Value = s3[s3Index];

        let answer;
        if (s3Value === s1Value && s3Value === s2Value)
            answer = dfs(s1Index + 1, s2Index, s3Index + 1) || dfs(s1Index, s2Index + 1, s3Index + 1);
        else if (s3Value === s1Value)
            answer = dfs(s1Index + 1, s2Index, s3Index + 1);
        else if (s3Value === s2Value)
            answer = dfs(s1Index, s2Index + 1, s3Index + 1);
        else
            answer = false;

        cache.set(key, answer);
        return answer;
    };

    return dfs(0, 0, 0);
};

console.log(isInterleave("a", "b", "a")) // false
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")) // true
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc")) // false
console.log(isInterleave("", "", "")) // true
