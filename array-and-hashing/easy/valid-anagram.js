/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map();
    for (const char of s){
        if (map.has(char)){
            let count = map.get(char) + 1;
            map.set(char, count);
            console.log(map)
        }
        else {
            map.set(char, 1);
        }
    }
    for (const char of t){
        if (map.has(char)){
            let count = map.get(char);
            if (count === 1)
                map.delete(char);
            else {
                count -= 1;
                map.set(char, count);
            }
        }
        else {
            return false
        }
    }
    if (map.size === 0)
        return true;
    else return false;
};

console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("rat", "car")) // false
