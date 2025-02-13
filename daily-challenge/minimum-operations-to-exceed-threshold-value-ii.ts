import {MinPriorityQueue} from "@datastructures-js/priority-queue";

function minOperations(nums: number[], k: number): number {
    const minPriorityQueue: MinPriorityQueue<number> = new MinPriorityQueue();
    let res: number = 0;

    for (const num of nums) {
        if (num < k)
            minPriorityQueue.enqueue(num);
    }

    while (minPriorityQueue.size() >= 2) {
        const first: number = minPriorityQueue.dequeue();
        const second: number = minPriorityQueue.dequeue();
        const value: number = (Math.min(first, second) * 2) + Math.max(first, second);
        if (value < k)
            minPriorityQueue.enqueue(value);
        res++;
    }

    return minPriorityQueue.size() === 1 ? res + 1 : res;
}

console.log(minOperations([2, 11, 10, 1, 3], 10)) // 2
console.log(minOperations([1, 1, 2, 4, 9], 20)) // 4

// 13/2/2025
