/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let [rob1, rob2] = [0,0];
    for (const num of nums){
        let temp = Math.max(num+rob1, rob2)
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
};

console.log(rob([1,2,3,1])) // 4
console.log(rob([2,7,9,3,1])) // 12
