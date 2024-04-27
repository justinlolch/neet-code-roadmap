/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
    // recursive solution

    const cache = new Map();
    const helper = (r, k) => {
        if (k >= key.length)
            return 0;

        if (cache.has(`${r}-${k}`))
            return cache.get(`${r}-${k}`);

        let res = Infinity;

        for (let index in ring) {
            index = parseInt(index);
            if (ring[index] === key[k]) {
                const minSteps = Math.min(
                    Math.abs(index-r),
                    ring.length - Math.abs(index-r)
                );
                res = Math.min(
                    res,
                    minSteps + 1 + helper(index, k+1)
                )
            }
        }
        cache.set(`${r}-${k}`, res);
        return res;
    };

    return helper(0, 0);
};

console.log(findRotateSteps("iotfo", "fioot")) // 11
console.log(findRotateSteps("godding", "gd")) // 4
console.log(findRotateSteps("godding", "godding")) // 13

// 27/4/2024
