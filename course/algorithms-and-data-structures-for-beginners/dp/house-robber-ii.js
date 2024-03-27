/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const robRemaining = (numsPartial) => {
        let [rob1, rob2] = [0, 0];

        for (const n of numsPartial) {
            let temp = Math.max(n + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
    }

    return Math.max(nums[0], robRemaining(nums.slice(1, nums.length)), robRemaining(nums.slice(0, nums.length - 1)));
};

console.log(rob([2, 3, 2])) // 3
console.log(rob([1, 2, 3, 1])) // 4
console.log(rob([1, 2, 3])) // 3
