import {MinPriorityQueue} from "@datastructures-js/priority-queue";

class NumberContainers {
    indexMap: Map<number, number>;
    numberMapToPriorityQueue: Map<number, MinPriorityQueue<number>>;

    constructor() {
        this.indexMap = new Map();
        this.numberMapToPriorityQueue = new Map();
    }

    change(index: number, number: number): void {
        this.indexMap.set(index, number);
        if (!this.numberMapToPriorityQueue.has(number)) {
            const priorityQueue: MinPriorityQueue<number> = new MinPriorityQueue();
            priorityQueue.enqueue(index);
            this.numberMapToPriorityQueue.set(number, priorityQueue);
        } else {
            const priorityQueue: MinPriorityQueue<number> =  this.numberMapToPriorityQueue.get(number)!
            priorityQueue.enqueue(index)
            this.numberMapToPriorityQueue.set(number, priorityQueue);
        }
    }

    find(number: number): number {
        if (!this.numberMapToPriorityQueue.has(number))
            return -1;

        const numberQueue: MinPriorityQueue<number>= this.numberMapToPriorityQueue.get(number)!;
        let index: number;

        do {
            index = numberQueue.dequeue();
        } while (number !== this.indexMap.get(index) && index !== undefined);

        if (index === undefined)
            return -1
        else
            return index;
    }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

// 8/2/2025
