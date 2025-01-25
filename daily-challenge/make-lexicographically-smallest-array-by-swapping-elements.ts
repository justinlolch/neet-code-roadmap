function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    const groups: number[][] = [];
    const numToGroup: Map<number, number> = new Map();

    const sortedNums: number[] = [...nums].sort((a, b) => a - b);

    for (const num of sortedNums) {
        if (
            groups.length === 0 ||
            Math.abs(num - groups[groups.length - 1][groups[groups.length - 1].length - 1]) > limit
        ) {
            groups.push([num]);
        } else {
            groups[groups.length - 1].push(num);
        }
        numToGroup.set(num, groups.length - 1);
    }

    const result: number[] = [];
    for (const num of nums) {
        const groupIndex: number = numToGroup.get(num)!;
        result.push(groups[groupIndex].shift()!);
    }

    return result;
}

console.log(lexicographicallySmallestArray([1, 5, 3, 9, 8], 2)) // [1,3,5,8,9]
console.log(lexicographicallySmallestArray([1, 7, 6, 18, 2, 1], 3)) // [1,6,7,18,1,2]
console.log(lexicographicallySmallestArray([1, 7, 28, 19, 10], 3)) // [1,7,28,19,10]

// 25/1/2025
