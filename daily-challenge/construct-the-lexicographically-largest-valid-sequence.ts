function constructDistancedSequence(n: number): number[] {
    const res = new Array(2 * n - 1).fill(0);
    const used = new Set();

    const dfs = (i: number): boolean => {
        while (i < res.length && res[i] !== 0) {
            i++;
        }
        if (i === res.length) return true;

        for (let j = n; j > 0; j--) {
            if (used.has(j)) continue;

            if (j === 1) {
                res[i] = 1;
                used.add(1);

                if (dfs(i + 1)) return true;

                used.delete(1);
                res[i] = 0;
            } else {
                if (i + j >= res.length || res[i + j] !== 0) continue;

                res[i] = j;
                res[i + j] = j;
                used.add(j);

                if (dfs(i + 1)) return true;

                used.delete(j);
                res[i] = 0;
                res[i + j] = 0;
            }
        }

        return false;
    };

    dfs(0);
    return res;
}

console.log(constructDistancedSequence(3)) // [3,1,2,3,2]
console.log(constructDistancedSequence(5)) // [5,3,1,4,3,5,2,4,2]

// 16/2/2025
