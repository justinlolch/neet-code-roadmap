function countSymmetricIntegers(low: number, high: number): number {
    let count: number = 0;

    for (let i: number = low; i <= high; i++) {
        // odd num digit -> skip
        if ((Math.floor((Math.log10(i)) + 1)) % 2 !== 0)
            continue;

        const str: string = i.toString();
        const n: number = str.length / 2;
        let left: number = 0;
        let right: number = 0;
        for (let j: number = 0; j < n; j++) {
            left += +str[j];
            right += +str[j+n];
        }

        if (left === right)
            count++
    }

    return count;
}

console.log(countSymmetricIntegers(1, 100)) // 9
console.log(countSymmetricIntegers(1200, 1230)) // 4

// 11/4/2025
