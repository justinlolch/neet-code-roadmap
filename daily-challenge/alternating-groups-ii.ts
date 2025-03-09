function numberOfAlternatingGroups(colors: number[], k: number): number {
    const n: number = colors.length;
    let left: number = 0;
    let res: number = 0;

    for (let right: number = 1; right < n + k - 1; right++) {
        if (colors[right % n] === colors[(right - 1) % n])
            left = right;
        if (right - left + 1 > k)
            left += 1;
        if (right - left + 1 === k)
            res += 1;
    }

    return res;
}

console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3)) // 3
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6)) // 2
console.log(numberOfAlternatingGroups([1, 1, 0, 1], 4)) // 0

// 9/3/2025
