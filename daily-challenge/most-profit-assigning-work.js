const {
    MinPriorityQueue,
    MaxPriorityQueue
} = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
    worker.sort((a, b) => a - b);

    let maxProfit = 0;
    const maxProfitQueue = new MaxPriorityQueue(elem => elem.pro);
    const minDifficultyQueue = new MinPriorityQueue(elem => elem.diff);

    for (let i = 0; i < profit.length; i++) {
        const elem = {pro: profit[i], diff: difficulty[i]};
        minDifficultyQueue.enqueue(elem);
    }

    for (const workDiff of worker) {
        while (!minDifficultyQueue.isEmpty() && minDifficultyQueue.front().diff <= workDiff) {
            maxProfitQueue.enqueue(minDifficultyQueue.dequeue());
        }
        if (!maxProfitQueue.isEmpty()) {
            maxProfit += maxProfitQueue.front().pro;
        }
    }

    return maxProfit;
};

console.log(maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])) // 100
console.log(maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25])) // 0

// 18/6/2024
