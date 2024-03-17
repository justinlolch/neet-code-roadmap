/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const maxHeap = new MaxPriorityQueue();

    nums.forEach(num => maxHeap.enqueue(num));

    while (k>1){
        maxHeap.dequeue();
        k-=1;
    }
    return maxHeap.dequeue().element;
};