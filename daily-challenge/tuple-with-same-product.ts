function tupleSameProduct(nums: number[]): number {
    const productMap = new Map<number, number>();

    for (let i: number = 0; i < nums.length; i++)
        for (let j: number = i + 1; j < nums.length; j++) {
            const product: number = nums[i] * nums[j];
            productMap.set(product, (productMap.get(product) ?? 0) + 1);
        }

    let res: number = 0;
    for (const count of productMap.values()) {
        const pairs: number = count * ((count - 1) / 2);
        res += 8 * pairs
    }

    return res;
}

console.log(tupleSameProduct([2, 3, 4, 6])) // 8
console.log(tupleSameProduct([1, 2, 4, 5, 10])) // 16
console.log(tupleSameProduct([2, 3, 4, 6, 8, 12])) // 40

// 6/2/2025
