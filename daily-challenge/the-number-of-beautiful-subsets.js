/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
    nums.sort();
    const dfs = (i, set) => {
        if (i >= nums.length) {
            return 1;
        }

        let res = dfs(i+1, set);
        if (!set.has(nums[i] + k) && !set.has(nums[i]-k)) {
            set.add(nums[i]);
            res += dfs(i+1, set);
            set.delete(nums[i]);
        }
        return res;
    };

    return dfs(0, new Set()) - 1;
};

console.log(beautifulSubsets([18, 12, 10, 5, 6, 2, 18, 3], 8)) // 143
console.log(beautifulSubsets([2, 4, 6], 2)) // 4
console.log(beautifulSubsets([1], 1)) // 1

// 23/5/2024
