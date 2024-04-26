/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const resultSets = [];

    const helper = (i, curSet) => {

        if (i <= 0) {
            if (curSet.length === k)
                resultSets.push(curSet.slice());
            return;
        }

        curSet.push(i);
        helper(i - 1, curSet);
        curSet.pop();
        helper(i - 1, curSet);
    };

    helper(n, [])
    return resultSets;
};

console.log(combine(4, 2)) // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combine(1, 1)) // [[1]]
