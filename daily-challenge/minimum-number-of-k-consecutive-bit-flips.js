/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
    const queue = [];
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        while (queue.length > 0 && i > (queue[0] + k - 1)) {
            queue.shift();
        }

        if ((queue.length + nums[i]) % 2 === 0) {
            if (i + k > nums.length)
                return -1;
            // flip
            res += 1;
            queue.push(i);
        }

    }

    return res;
};

console.log(minKBitFlips([0, 1, 0], 1)) // 2
console.log(minKBitFlips([1, 1, 0], 2)) // -1
console.log(minKBitFlips([0, 0, 0, 1, 0, 1, 1, 0], 3)) // 3

// 24/6/2024
