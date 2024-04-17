/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const sCountMap = new Map();
    const tCountMap = new Map();
    const sToTMap = new Map();

    for (let i = 0; i < s.length; i++) {
        sCountMap.set(s[i], sCountMap.has(s[i]) ? sCountMap.get(s[i]) + 1 : 1);
        tCountMap.set(t[i], tCountMap.has(t[i]) ? tCountMap.get(t[i]) + 1 : 1);
        if (!sToTMap.has(s[i]))
            sToTMap.set(s[i], t[i]);

        if (sCountMap.get(s[i]) !== tCountMap.get(sToTMap.get(s[i])))
            return false;
    }

    return true;
};

console.log(isIsomorphic("egg", "add")) // true
console.log(isIsomorphic("foo", "bar")) // false
console.log(isIsomorphic("paper", "title")) // true

// 2/4/2024