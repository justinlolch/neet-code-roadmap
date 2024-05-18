/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    coins.sort((a, b) => b - a);
    let dp = new Array(amount + 1).fill(0);

    for (let i = 0; i < coins.length; i++) {
        const curRow = new Array(amount + 1);
        curRow[0] = 1;
        for (let j = 1; j <= amount; j++) {
            const look = j - coins[i];
            const current = look >= 0 ? curRow[look] : 0;
            const last = dp[j];
            curRow[j] = current + last;
        }
        dp = curRow;
    }

    return dp[amount];
};

console.log(change(5, [1, 2, 5])) // 4
console.log(change(3, [2])) // 0
console.log(change(10, [10])) // 1
