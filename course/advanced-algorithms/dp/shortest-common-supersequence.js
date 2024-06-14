/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
    const priorityQueue = new MinPriorityQueue({priority: elem => elem.length});

    const dfs = (index1, index2, current) => {
        if (!priorityQueue.isEmpty() && current.length >= priorityQueue.front().element.length)
            return;

        if (index1 >= str1.length && index2 >= str2.length) {
            priorityQueue.enqueue(current.join(""));
            return;
        }

        const value1 = str1[index1];
        const value2 = str2[index2];

        if (value1 === value2) {
            dfs(index1 + 1, index2 + 1, [...current, value1]);
        } else {
            if (value1 !== undefined)
                dfs(index1 + 1, index2, [...current, value1]);
            if (value2 !== undefined)
                dfs(index1, index2 + 1, [...current, value2]);
        }
    };

    dfs(0, 0, []);

    return priorityQueue.front().element;
};

console.log(shortestCommonSupersequence("bcaaacbbbcbdcaddadcacbdddcdcccdadadcbabaccbccdcdcbcaccacbbdcbabb", "dddbbdcbccaccbababaacbcbacdddcdabadcacddbacadabdabcdbaaabaccbdaa")) // "cabac"
console.log(shortestCommonSupersequence("abac", "cab")) // "cabac"
console.log(shortestCommonSupersequence("aaaaaaaa", "aaaaaaaa")) // "aaaaaaaa"
