function pivotArray(nums: number[], pivot: number): number[] {
    const less: number[] = [];
    const p: number[] = [];
    const greater: number[] = [];

    for (const num of nums) {
        if (num < pivot)
            less.push(num);
        else if (num === pivot)
            p.push(num);
        else greater.push(num);
    }

    return [...less, ...p, ...greater];
}

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)) // [9,5,3,10,10,12,14]
console.log(pivotArray([-3, 4, 3, 2], 2)) // [-3,2,4,3]

// 3/3/2025
