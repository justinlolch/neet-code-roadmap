/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    const cache = new Map();

    const dfs = (sIndex, tIndex) => {
        const key = `${sIndex}-${tIndex}`;
        if (cache.has(key))
            return cache.get(key);

        if (tIndex === t.length) {
            return 1;
        }

        if (sIndex === s.length) {
            return 0;
        }

        let count = dfs(sIndex + 1, tIndex);
        if (s[sIndex] === t[tIndex])
            count += dfs(sIndex + 1, tIndex + 1)
        cache.set(key, count);
        return count;
    };

    return dfs(0, 0);
};

console.log(numDistinct("adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc", t = "bcddceeeebecbc")) // 3
console.log(numDistinct("rabbbit", t = "rabbit")) // 3
console.log(numDistinct("babgbag", t = "bag")) // 5
