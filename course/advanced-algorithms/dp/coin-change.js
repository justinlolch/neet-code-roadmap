/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0)
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }

    return dp[amount] !== Infinity ? dp[amount] : -1;
};

console.log(coinChange([186,419,83,408], 6249)) // 20
console.log(coinChange([1, 2, 5], 11)) // 3
console.log(coinChange([2], 3)) // -1
console.log(coinChange([1], 0)) // 0
