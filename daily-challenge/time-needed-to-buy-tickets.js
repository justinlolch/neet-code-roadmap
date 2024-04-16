/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let time = 0;

    for (let i = 0 ; i < tickets.length; i++) {
        if (i <= k)
            time += Math.min(tickets[i], tickets[k]);
        else
            time += Math.min(tickets[i], tickets[k]-1);
    }
    return time;
};

console.log(timeRequiredToBuy([15, 66, 3, 47, 71, 27, 54, 43, 97, 34, 94, 33, 54, 26, 15, 52, 20, 71, 88, 42, 50, 6, 66, 88, 36, 99, 27, 82, 7, 72], 18)) // 1457
console.log(timeRequiredToBuy([2, 3, 2], 2)) // 6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)) // 8

// 9/4/2024
