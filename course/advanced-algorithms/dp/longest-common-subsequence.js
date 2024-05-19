/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const cache = new Map();

    const dfs = (i1, i2) => {
        if (i1 === text1.length || i2 === text2.length)
            return 0;

        const key = `${i1}-${i2}`;
        if (cache.has(key))
            return cache.get(key);

        let ans;
        if (text1[i1] === text2[i2]) {
            ans = 1 + dfs(i1 + 1, i2 + 1);
        } else {
            ans = Math.max(
                dfs(i1 + 1, i2),
                dfs(i1, i2 + 1)
            );
        }
        cache.set(key, ans);
        return ans;
    };

    return dfs(0, 0);
};

console.log(longestCommonSubsequence("abcde", "ace")) // 3
console.log(longestCommonSubsequence("abc", "abc")) // 3
console.log(longestCommonSubsequence("abc", "def")) // 0
