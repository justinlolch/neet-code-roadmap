const {
    MinPriorityQueue,
    MaxPriorityQueue
} = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    const maxQueue = new MaxPriorityQueue(elem => elem.value);
    const minQueue = new MinPriorityQueue(elem => elem.value);

    let leftPt = 0;
    let maxLength = 0;

    for (let rightPt = 0; rightPt < nums.length; rightPt++) {
        const obj = {value: nums[rightPt], index: rightPt};
        maxQueue.enqueue(obj);
        minQueue.enqueue(obj);

        if (maxQueue.front().value - minQueue.front().value > limit) {
            leftPt = Math.min(maxQueue.front().index, minQueue.front().index) + 1;

            while (maxQueue.front().index < leftPt)
                maxQueue.dequeue();
            while (minQueue.front().index < leftPt)
                minQueue.dequeue();
        }
        maxLength = Math.max(maxLength, rightPt - leftPt + 1)
    }

    return maxLength;
};

console.log(longestSubarray([8, 2, 4, 7], 4)) // 2
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5)) // 4
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0)) // 3

// 23/6/2024
