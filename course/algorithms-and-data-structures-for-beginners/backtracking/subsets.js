/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const resultSet = [];

    const subset = [];
    const dfs = (i) => {
        if (i >= nums.length) {
            resultSet.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        dfs(i + 1);
        subset.pop();
        dfs(i + 1);
    };

    dfs(0)
    return resultSet;
};

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // [[],[0]]