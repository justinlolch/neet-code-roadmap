function maxScore(s: string): number {
    let ones: number = s.split("1").length - 1;
    let zeros: number = 0;
    let max: number = 0;

    for (let i: number = 0; i < s.length - 1; i++) {
        const cur: string = s[i];
        if (cur === "1")
            ones -= 1;
        else zeros += 1;
        max = Math.max(max, zeros + ones)
    }

    return max;
}

console.log(maxScore("011101")) // 5
console.log(maxScore("00111")) // 5
console.log(maxScore("1111")) // 3

// 1/1/2025
