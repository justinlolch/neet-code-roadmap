/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const minHeap = new MinPriorityQueue();

    for (const combinationIndex in points) {
        const distance = Math.sqrt((Math.pow(points[combinationIndex][0], 2) + Math.pow(points[combinationIndex][1], 2)))

        minHeap.enqueue(points[combinationIndex], distance);
    }

    const results = [];
    while (k > 0) {
        const ans = minHeap.dequeue().element;
        results.push(ans);
        k -= 1;
    }
    return results;
};