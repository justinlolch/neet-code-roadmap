/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const  subSets = [];

    const helper = (index, arr, curSet) => {
        if (index >= arr.length) {
            subSets.push(curSet.slice());
            return;
        }

        curSet.push(arr[index]);
        helper(index+1, arr, curSet);
        curSet.pop();

        while (index + 1 < arr.length && nums[index] === nums[index + 1])
            index += 1;
        helper(index + 1, arr, curSet);
    };

    helper(0, nums.sort(), []);
    return subSets;
};

console.log(subsetsWithDup([1, 2, 2])) // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])) // [[],[0]]
