function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n: number = A.length;
    const prefixCommonArray: number[] = new Array(n).fill(0);
    const frequency: number[] = new Array(n + 1).fill(0);
    let commonCount: number = 0;

    for (let i: number = 0; i < n; i++) {
        frequency[A[i]] += 1;
        if (frequency[A[i]] === 2) {
            commonCount += 1;
        }

        frequency[B[i]] += 1;
        if (frequency[B[i]] === 2) {
            commonCount += 1;
        }

        prefixCommonArray[i] = commonCount;
    }

    return prefixCommonArray;
}

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4])) // [0,2,3,4]
console.log(findThePrefixCommonArray([2, 3, 1], [3, 1, 2])) // [0,1,3]

// 14/1/2025
