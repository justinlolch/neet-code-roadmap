function maximumCandies(candies: number[], k: number): number {
    const total: number = candies.reduce((acc, cur) => acc + cur, 0);
    if (total < k)
        return 0;

    let left: number = 1;
    let right: number = Math.floor(total / k);
    let res: number =0;

    while (left <= right){
        let middle: number = Math.floor((left+right)/2);
        let count: number= 0;
        for (const c of candies) {
            if (c >= middle)
                count += Math.floor(c/middle);
            if (count>=k)
                break;
        }
        if (count >= k) {
            res = middle;
            left = middle+1;
        } else
            right = middle -1;
    }

    return res;
}

console.log(maximumCandies([5, 8, 6], 3)) // 5
console.log(maximumCandies([2, 5], 11)) // 0

// 14/3/2025
