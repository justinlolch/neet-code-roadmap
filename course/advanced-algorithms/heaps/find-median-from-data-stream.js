class MedianFinder {
    constructor() {
        this.minPriorityQueue = new MinPriorityQueue();
        this.maxPriorityQueue = new MaxPriorityQueue();
    }

    addNum(num) {
        if (this.maxPriorityQueue.front() && this.maxPriorityQueue.front().element > num)
            this.maxPriorityQueue.enqueue(num);
        else if (this.minPriorityQueue.front() && this.minPriorityQueue.front().element < num)
            this.minPriorityQueue.enqueue(num);
        else {
            const maxSize = this.maxPriorityQueue.size();
            const minSize = this.minPriorityQueue.size();
            if (maxSize === minSize)
                this.minPriorityQueue.enqueue(num);
            else if (maxSize > minSize)
                this.minPriorityQueue.enqueue(num);
            else this.maxPriorityQueue.enqueue(num);
        }
        this.balanceQueue();
    }

    balanceQueue() {
        const maxSize = this.maxPriorityQueue.size();
        const minSize = this.minPriorityQueue.size();
        if (Math.abs(maxSize - minSize) > 1) {
            if (maxSize > minSize) {
                const value = this.maxPriorityQueue.dequeue().element;
                this.minPriorityQueue.enqueue(value);
            } else {
                const value = this.minPriorityQueue.dequeue().element;
                this.maxPriorityQueue.enqueue(value);
            }
        }
    }

    findMedian() {
        const maxSize = this.maxPriorityQueue.size();
        const minSize = this.minPriorityQueue.size();

        if (maxSize === minSize)
            return (this.maxPriorityQueue.front().element + this.minPriorityQueue.front().element) / 2;
        else if (maxSize > minSize)
            return this.maxPriorityQueue.front().element;
        else return this.minPriorityQueue.front().element;
    }
}

