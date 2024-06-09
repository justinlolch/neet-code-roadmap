/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let prefixSum = 0;
    let res = 0;
    const map = new Map([[0, 1]]);

    for (const n of nums) {
        prefixSum += n;
        let remain = prefixSum % k;
        if (prefixSum < 0 && remain !== 0)
            remain += k;

        if (map.has(remain))
            res += map.get(remain);
        map.set(remain, (map.has(remain) ? map.get(remain) : 0) + 1);
    }
    return res;
};

console.log(subarraysDivByK([-1, 2, 9], 2)) // 2
console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)) // 7
console.log(subarraysDivByK([5], 9)) // 0

// 9/6/2024
