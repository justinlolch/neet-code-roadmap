/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    const sumWeight = stones.reduce((acc, elem) => acc + elem, 0);
    const target = Math.ceil(sumWeight / 2);
    const cache = new Map();

    const dfs = (index, total) => {
        if (total >= target || index === stones.length)
            return Math.abs(total - (sumWeight - total));

        const key = `${index}-${total}`;
        if (cache.has(key))
            return cache.get(key);

        const value = Math.min(
            dfs(index + 1, total),
            dfs(index + 1, total + stones[index])
        )
        cache.set(key, value);
        return value;
    };

    return dfs(0, 0);
};

console.log(lastStoneWeightII([89, 23, 100, 93, 82, 98, 91, 85, 33, 95, 72, 98, 63, 46, 17, 91, 92, 72, 77, 79, 99, 96, 55, 72, 24, 98, 79, 93, 88, 92])) // 0
console.log(lastStoneWeightII([2, 7, 4, 1, 8, 1])) // 1
console.log(lastStoneWeightII([31, 26, 33, 21, 40])) // 5
