import {MinPriorityQueue} from "@datastructures-js/priority-queue";

function maximumSum(nums: number[]): number {

    const getDigitSum: (n: number) => number = (n: number): number => n.toString().split("").map((d: string): number => parseInt(d, 10)).reduce((acc: number, cur: number): number => acc + cur, 0)

    const sumGroups: MinPriorityQueue<number>[] = new Array(82).fill(null).map(() => new MinPriorityQueue());

    let res: number = -1;

    for (const num of nums) {
        const digitSum: number = getDigitSum(num);
        sumGroups[digitSum].enqueue(num);

        if (sumGroups[digitSum].size() > 2) {
            sumGroups[digitSum].dequeue();
        }
    }

    for (const heap of sumGroups) {
        if (heap.size() === 2) {
            const first: number = heap.dequeue();
            const second: number = heap.dequeue();
            res = Math.max(res, first + second);
        }
    }

    return res;
}

console.log(maximumSum([18, 43, 36, 13, 7])) // 54
console.log(maximumSum([10, 12, 19, 14])) // -1

// 12/2/2025
