const {MinPriorityQueue, MaxPriorityQueue} = require("@datastructures-js/priority-queue");
/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    if (nums.length <= 4) return 0;

    const minQueue = new MinPriorityQueue({ priority: x => x });
    const maxQueue = new MaxPriorityQueue({ priority: x => x });

    for (const num of nums) {
        minQueue.enqueue(num);
        maxQueue.enqueue(num);
    }

    const minElems = [];
    const maxElems = [];

    for (let i = 0; i < 4; i++) {
        minElems.push(minQueue.dequeue().element);
        maxElems.push(maxQueue.dequeue().element);
    }

    let result = Infinity;

    for (let i = 0; i <= 3; i++) {
        result = Math.min(result, maxElems[i] - minElems[3 - i]);
    }

    return result;
};

console.log(minDifference([5, 3, 2, 4])) // 0
console.log(minDifference([1, 5, 0, 10, 14])) // 1
console.log(minDifference([3, 100, 20])) // 0

// 3/7/2024
