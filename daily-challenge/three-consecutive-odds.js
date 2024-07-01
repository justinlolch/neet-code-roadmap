/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
    let consecutiveCount = 0;
    for (const n of arr) {
        n % 2 === 0 ?
            consecutiveCount = 0 :
            consecutiveCount++;
        if (consecutiveCount === 3)
            return true;
    }
    return false;
};

console.log(threeConsecutiveOdds([2, 6, 4, 1])) // false
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])) // true

// 1/7/2024
