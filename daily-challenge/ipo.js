/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
    const profitHeap = new MaxPriorityQueue({priority: elem => elem.profit});
    const capitalHeap = new MinPriorityQueue({priority: elem => elem.capital});

    for (let i = 0; i < profits.length; i++) {
        const project = {profit: profits[i], capital: capital[i]};
        capitalHeap.enqueue(project);
    }

    while (k > 0) {
        while (!capitalHeap.isEmpty() && capitalHeap.front().element.capital <= w) {
            profitHeap.enqueue(capitalHeap.dequeue().element);
        }

        if (profitHeap.isEmpty())
            return w;
        const maxProfit = profitHeap.dequeue().element;
        w += maxProfit.profit;
        k--;
    }

    return w;
};

console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1])) // 4
console.log(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2])) // 6

// 15/6/2024
