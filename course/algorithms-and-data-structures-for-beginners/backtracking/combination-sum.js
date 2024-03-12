/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const resultSet = [];

    const subset = [];
    const dfs = (i) => {
        subset.push(i);
        const sum = subset.reduce((val, acc) => acc += val, 0);
        if (sum === target) {
            resultSet.push([...subset]);
            return;
        }

        if (target < sum)
            dfs(i);
            else {
               subset.pop();
               dfs(i+1);
        }
    }

    return resultSet;
};

console.log([2, 3, 6, 7], 7) // [[2,2,3],[7]]
console.log([2, 3, 5], 8) // [[2,2,2,2],[2,3,3],[3,5]]
