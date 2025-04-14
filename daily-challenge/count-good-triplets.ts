function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let count: number = 0;

    const isAValid = (i: number, j: number): boolean => Math.abs(i - j) <= a
    const isBValid = (j: number, k: number): boolean => Math.abs(j - k) <= b
    const isCValid = (i: number, k: number): boolean => Math.abs(i - k) <= c

    for (let i: number = 0; i < arr.length - 2; i++)
        for (let j: number = i + 1; j < arr.length - 1; j++)
            for (let k: number = j + 1; k < arr.length; k++)
                if (
                    isAValid(arr[i], arr[j]) &&
                    isBValid(arr[j], arr[k]) &&
                    isCValid(arr[i], arr[k])
                )
                    count++;

    return count;
}

console.log(countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)) // 4
console.log(countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)) // 0

// 1/9/2024