/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const resultSet = [];
    candidates.sort((a, b) => a - b);

    const dfs = (i, subset, total) => {
        if (total === target) {
            resultSet.push([...subset]);
            return;
        }

        if (total > target || i === candidates.length)
            return;

        subset.push(candidates[i]);
        dfs(i + 1, subset, total + candidates[i]);
        subset.pop();

        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1])
            i += 1;
        dfs(i + 1, subset, total);
    }

    dfs(0, [], 0);
    return resultSet;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)) // [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)) // [[1,2,2],[5]

// 13/8/2024
