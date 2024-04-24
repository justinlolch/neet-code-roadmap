/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    const cache = new Map([[0, 0], [1, 1], [2, 1]]);

    if (cache.has(n))
        return cache.get(n);

    for (let i = 3; i <= n; i++) {
        cache.set(i, (cache.get(i - 1) + cache.get(i - 2) + cache.get(i - 3)));
    }
    return cache.get(n);
};

console.log(tribonacci(4)) // 4
console.log(tribonacci(25)) // 1389537

// 24/4/2024
