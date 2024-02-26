/**
 * in-memory solution
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let resultSet = new Array(nums.length);
    let pre = nums[0];
    let post = nums[nums.length-1];
    resultSet[0] = 1;
    resultSet[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++) {
        resultSet[i] = pre;
        pre = nums[i]*pre;
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        let product = resultSet[i] * post;
        if (Math.abs(product) === 0) // needed in javascript to avoid negative zero (-0)
            product = 0;
        resultSet[i] = product;
        post = nums[i]*post;
    }
    return resultSet;
};

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) // [0,0,9,0,0]
