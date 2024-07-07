/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
    let result = 0;
    let empty = 0;

    while (numBottles > 0) {
        result += numBottles;
        empty += numBottles;

        numBottles = (empty / numExchange) >> 0;
        empty = empty % numExchange;
    }

    return result;
};

console.log(numWaterBottles(9, 3)) // 13
console.log(numWaterBottles(15, 4)) // 19

// 7/7/2024
