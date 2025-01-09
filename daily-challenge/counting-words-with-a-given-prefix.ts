function prefixCount(words: string[], pref: string): number {
    let ans: number = 0;
    for (const word of words) {
        if (word.startsWith(pref))
            ans += 1;
    }
    return ans;
}

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at")) // 2
console.log(prefixCount(["leetcode", "win", "loops", "success"], "code")) // 0

// 9/1/2025
