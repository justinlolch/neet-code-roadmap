/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
    let total = 0;
    const priorityQueue = new MaxPriorityQueue();

    for (const happy of happiness)
        priorityQueue.enqueue(happy);

    for (let i = 0 ; i < k; i++){
        const maxValue = priorityQueue.dequeue().element - i;
        total += (maxValue > 0 ? maxValue : 0);
    }

    return total;
};

console.log(maximumHappinessSum([1, 1, 1, 1], 2)) // 1
console.log(maximumHappinessSum([2, 3, 4, 5], 1)) // 5

// 9/5/2024
