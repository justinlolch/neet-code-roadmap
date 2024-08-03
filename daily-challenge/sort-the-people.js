const {MaxPriorityQueue} = require("@datastructures-js/priority-queue");
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    const maxQueue = new MaxPriorityQueue({priority: element => element.height});

    for (let i = 0; i < names.length; i++)
        maxQueue.enqueue({name: names[i], height: heights[i]});

    return maxQueue.toArray().map(({element}) => element.name);
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])) // ["Mary","Emma","John"]
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])) // ["Bob","Alice","Bob"]

// 22/7/2024
