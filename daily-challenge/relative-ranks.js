/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const medalStack = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    const maxQueue = new MaxPriorityQueue({priority: elem => elem.value});
    const result = new Array(score.length).fill(undefined);

    for (let i = 0; i < score.length; i++) {
        maxQueue.enqueue({value: score[i], index: i});
    }

    for (let i = 1; i <= score.length; i++) {
        const {element: next} = maxQueue.dequeue();
        result[next.index] = medalStack.length > 0 ? medalStack.shift() : i.toString();
    }

    return result;
};

// 8/5/2024
