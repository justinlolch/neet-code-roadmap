/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
    const maxHeap = new MaxPriorityQueue({priority: elem => elem.q});
    const workers = [];

    for (let i = 0; i < quality.length; i++) {
        const q = quality[i];
        const w = wage[i];
        const worker = {q, r: w / q};
        workers.push(worker);
    }
    workers.sort((a, b) => a.r - b.r);

    let minWage = Infinity;
    let totalQuality = 0;

    for (const worker of workers) {
        maxHeap.enqueue(worker);
        totalQuality += worker.q;

        if (maxHeap.size() > k) {
            const maxQ = maxHeap.dequeue().element.q;
            totalQuality -= maxQ;
        }

        if (maxHeap.size() === k) {
            minWage = Math.min(minWage, totalQuality * worker.r);
        }
    }

    return minWage;
};

console.log(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2)) // 105.00000
console.log(mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3)) // 30.66667

// 11/5/2024
