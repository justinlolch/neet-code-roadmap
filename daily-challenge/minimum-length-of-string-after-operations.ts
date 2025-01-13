function minimumLength(s: string): number {
    let operationTimes: number = 0;
    const charCounter = new Map<string, number>();

    for (let i: number = 0; i < s.length; i++) {
        const currentCount: number = charCounter.get(s[i]) ?? 0;
        if (currentCount >= 2) {
            operationTimes++;
            charCounter.set(s[i], 1);
        } else charCounter.set(s[i], currentCount + 1);
    }

    return s.length - operationTimes * 2;
}

console.log(minimumLength("abaacbcbb")) // 5
console.log(minimumLength("aa")) // 2

// 13/1/2025
