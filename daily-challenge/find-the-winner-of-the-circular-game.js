/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {

    const recursive = (n, k) => {
        if (n === 1)
            return 0;

        return (recursive(n - 1, k) + k) % n
    }

    return recursive(n, k) + 1;
};

console.log(findTheWinner(5, 2)) // 3
console.log(findTheWinner(6, 5)) // 1

// 8/7/2024
