/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const isPalindrome = (str) => {
        let l = 0;
        let r = str.length - 1;
        while (l < r) {
            if (str[l] !== str[r])
                return false;
            l++;
            r--;
        }
        return true;
    };

    const allSets = [];
    const currentSet = [];

    const dfs = (index) => {
        if (index >= s.length) {
            allSets.push([...currentSet]);
            return;
        }

        for (let j = index; j < s.length; j++) {
            const current = s.slice(index, j+1);
            if (isPalindrome(current)) {
                currentSet.push(current);
                dfs(j + 1);
                currentSet.pop();
            }
        }

    };

    dfs(0);
    return allSets;
};

console.log(partition("aab")) // [["a","a","b"],["aa","b"]]
console.log(partition("a")) // [["a"]]

// 22/5/2024
