/**
 * prefix postfix solution
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const copy = nums;
    const prefix = [];
    const postfix = [];
    for (let i = 0; i < copy.length; i++) {
        if (i - 1 >= 0) {
            prefix.push(copy[i]*prefix[i-1]);
        }
        else {
            prefix.push(copy[i]);
        }
    }
    copy.reverse();
    for (let i = 0; i < copy.length; i++) {
        if (i - 1 >= 0) {
            postfix.push(copy[i]*postfix[i-1]);
        }
        else {
            postfix.push(copy[i]);
        }
    }
    postfix.reverse();

    const result = [];
    for (let index in nums) {
        index = parseInt(index);
        let prefixV, postfixV;
        if (index == 0) {
            prefixV = 1;
            postfixV = postfix[index + 1];
        }
        else if (index == (nums.length - 1)) {
            postfixV = 1;
            prefixV = prefix[index - 1];
        }
        else {
            prefixV = prefix[index - 1];
            postfixV = postfix[index + 1];
        }
        result.push(prefixV*postfixV);
    }
    return result
};

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) // [0,0,9,0,0]
