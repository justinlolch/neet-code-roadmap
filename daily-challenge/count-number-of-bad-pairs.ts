function countBadPairs(nums: number[]): number {
    let goodPairs: number = 0;
    const map = new Map<number, number>();
    const n: number = nums.length;

    for (let i: number = 0; i < n; i++) {
        const pair: number = map.get(nums[i] - i) ?? 0;
        goodPairs += pair;
        map.set(nums[i] - i, pair + 1);
    }

    const totalPairs: number = (n * (n - 1)) / 2;
    return totalPairs - goodPairs;
}

console.log(countBadPairs([4, 1, 3, 3])) // 5
console.log(countBadPairs([1, 2, 3, 4, 5])) // 0

// 9/2/2025
