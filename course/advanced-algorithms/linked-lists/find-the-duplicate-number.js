/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let [slow, fast] = [0, 0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    let secondSlow = 0;
    do {
        slow = nums[slow];
        secondSlow = nums[secondSlow];
    } while (secondSlow !== slow)

    return slow;
};

console.log(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1])) // 9
console.log(findDuplicate([1, 3, 4, 2, 2])) // 2
console.log(findDuplicate([3, 1, 3, 4, 2])) // 3
console.log(findDuplicate([3, 3, 3, 3, 3])) // 3
