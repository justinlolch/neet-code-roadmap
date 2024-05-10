/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
    const priorityQueue = new MinPriorityQueue({priority: elem => elem.fraction});

    for (let i = 0; i < arr.length-1; i++){
        for (let j = i+1; j < arr.length; j++) {
            const left = arr[i];
            const right = arr[j];
            priorityQueue.enqueue({fraction: left/right, left, right});
        }
    }

    let ans;
    for (let i = 0; i < k; i++)
        ans = priorityQueue.dequeue().element;

    return [ans.left, ans.right];
};

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3)) // [2,5]
console.log(kthSmallestPrimeFraction([1, 7], 1)) // [1,7]

// 10/5/2024
