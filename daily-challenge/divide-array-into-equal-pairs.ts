function divideArray(nums: number[]): boolean {
    const oddSet = new Set();

    for (const n of nums)
        if (!oddSet.has(n))
            oddSet.add(n);
        else oddSet.delete(n);

    return oddSet.size === 0;
}

console.log(divideArray([3, 2, 3, 2, 2, 2])) // true
console.log(divideArray([1, 2, 3, 4])) // false

// 17/3/2025
