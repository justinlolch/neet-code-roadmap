/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let leftPt = 0;
    let rightPt = 0;
    let lastIndex = prices.length - 1;
    let maxEarn = 0;

    while (rightPt <= lastIndex)  {
        if (prices[rightPt] < prices[leftPt]) {
            leftPt = rightPt;
        }

        if (prices[rightPt] > prices[leftPt])
            maxEarn = Math.max(maxEarn, prices[rightPt]-prices[leftPt]);

        rightPt += 1;

    }

    return maxEarn;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([7, 6, 4, 3, 1])) // 0
console.log(maxProfit([1, 2])) // 1
console.log(maxProfit([2, 4 ,1])) // 2
