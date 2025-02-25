function numOfSubarrays(arr: number[]): number {
    let curSum: number = 0;
    let oddCount: number = 0;
    let evenCount: number = 0;
    let res: number = 0;
    const MOD: number = 10 ** 9 + 7;

    for (const num of arr) {
        curSum += num;

        if (curSum % 2) {
            res = (res + 1 + evenCount) % MOD;
            oddCount += 1;
        } else {
            res = (res + oddCount) % MOD;
            evenCount += 1;
        }
    }

    return res;
}

console.log(numOfSubarrays([1, 3, 5])) // 4
console.log(numOfSubarrays([2, 4, 6])) // 0
console.log(numOfSubarrays([1, 2, 3, 4, 5, 6, 7])) // 16

// 24/2/2025
