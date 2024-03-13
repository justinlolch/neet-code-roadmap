/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const resultSet = [];

    const dfs = (i, subset) => {
        if (i >= candidates.length)
            return;

        const sum = subset.reduce((val,acc)=>acc+val,0);
        if (sum > target)
            return;

        if (sum === target) {
            resultSet.push([...subset])
            return;
        }

        subset.push(candidates[i]);
        dfs(i, subset);
        subset.pop();
        dfs(i+1, subset);
    };

    dfs(0, []);
    return resultSet;
};

console.log(combinationSum([3, 5, 7], 10)); // [[3,7],[5,5]]
console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
