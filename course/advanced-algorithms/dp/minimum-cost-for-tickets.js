/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    const pass = [1, 7, 30];
    const cache = new Map();

    const dp = (i, validUntil) => {
        if (i === days.length)
            return 0;

        const key = `${i}-${validUntil}`;
        if (cache.has(key))
            return cache.get(key);

        const today = days[i];
        if (today <= validUntil) {
            return dp(i + 1, validUntil);
        } else {
            const min = Math.min(
                costs[0] + dp(i + 1, today + pass[0] - 1),
                costs[1] + dp(i + 1, today + pass[1] - 1),
                costs[2] + dp(i + 1, today + pass[2] - 1),
            );
            cache.set(key, min);
            return min;
        }
    };

    return dp(0, 0);
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15])) // 11
console.log(mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])) // 17
