/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    for (const index in strs) {
        const str = strs[index];
        const orderedString = str.split('').sort().join('');
        if (map.has(orderedString)){
            const existing = map.get(orderedString);
            existing.push(str);
            map.set(orderedString, existing);
        }
        else {
            map.set(orderedString, new Array(str));
        }
    }
    const result = [];
    for (const values of map.values()){
        result.push(values);
    }
    return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
