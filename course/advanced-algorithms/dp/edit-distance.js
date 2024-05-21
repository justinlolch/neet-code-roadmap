/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const cache = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
        cache[i][n] = m - i;
    }
    for (let j = 0; j <= n; j++) {
        cache[m][j] = n - j;
    }

    for (let i = word1.length - 1; i >= 0; i--)
        for (let j = word2.length - 1; j >=0; j--) {
            if (word1[i] === word2[j])
                cache[i][j] = cache[i+1][j+1];
            else cache[i][j] = 1 + Math.min(cache[i][j+1], cache[i+1][j], cache[i+1][j+1]);
        }

    return cache[0][0];
};

console.log(minDistance("horse", "ros")) // 3
console.log(minDistance("intention", "execution")) // 5
