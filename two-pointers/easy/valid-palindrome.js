/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let stringArr = [];
    const regex = /[a-z0-9]/;
    for (const index in s) {
        const char = s[index].toLowerCase();
        if (regex.test(char))
            stringArr.push(char);
    }

    if (stringArr.length === 0)
        return true;

    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] === stringArr[stringArr.length-1-i])
            continue;
        else return false;
    }

    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome(" ")) // true
