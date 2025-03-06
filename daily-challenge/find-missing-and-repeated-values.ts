function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const emptySet = new Set<number>();
    const duplicateSet = new Set<number>();
    const result: number[] = [];

    for (let i: number= 1; i <= Math.pow(grid.length, 2); i++)
        emptySet.add(i);

    for (const row of grid)
        for (const value of row) {
            emptySet.delete(value);
            if (duplicateSet.has(value))
                result.push(value);
            duplicateSet.add(value);
        }

    for (const empty of emptySet.values())
        result.push(empty);

    return result;
}

console.log(findMissingAndRepeatedValues([[1,3],[2,2]])) // [2,4]
console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]])) // [9,5]

// 6/3/2025
