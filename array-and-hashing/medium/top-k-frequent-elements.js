/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    for (const num of nums) {
        if (map.has(num)) {
            let count = map.get(num);
            count++;
            map.set(num, count);
        }
        else {
            map.set(num, 1);
        }
    }
    const countArray = new Array(nums.length).fill([])
    for (const [key, values] of map) {
        countArray[values - 1] = [...countArray[values - 1], key];
    }
    return countArray.reverse().flat().splice(0, k);
};

console.log(topKFrequent([1,1,1,2,2,3], 2)) // [1,2]
console.log(topKFrequent([1], 1)) // [1]
console.log(topKFrequent([3,0,1,0], 1)) // [0]
