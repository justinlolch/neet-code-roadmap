function findDifferentBinaryString(nums: string[]): string {
    const set = new Set(nums);

    let res: number[] = Array(nums.length).fill(0);
    while (set.has(res.join(""))) {
        const str: string = res.join("");
        const nextTry: number = parseInt(str, 2) + 1;
        // @ts-ignore
        res = nextTry.toString(2).padStart(nums.length, "0").split("").map(e => parseInt(e, 10));
    }
    return res.join("");
}

console.log(findDifferentBinaryString(["01", "10"])) // "11"
console.log(findDifferentBinaryString(["00", "01"])) // "11"
console.log(findDifferentBinaryString(["111", "011", "001"])) // "101"

// 20/2/2025
