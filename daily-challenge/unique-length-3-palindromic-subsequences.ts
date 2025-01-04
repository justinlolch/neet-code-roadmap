function countPalindromicSubsequence(s: string): number {
    const set = new Set<string>();
    const occurrenceHashMap = new Map<string, number>();
    let ans = new Set<string>();

    for (let i: number = 0; i < s.length; i++)
        occurrenceHashMap.set(s[i], (occurrenceHashMap.get(s[i]) ?? 0) + 1)

    for (const char of s) {
        occurrenceHashMap.set(char, occurrenceHashMap.get(char)! - 1);
        for (const left of set.values()) {
            if (occurrenceHashMap.get(left)! > 0)
                ans.add(`${char}-${left}`)
        }
        set.add(char);
    }

    return ans.size;
}

console.log(countPalindromicSubsequence("aabca")) // 3
console.log(countPalindromicSubsequence("adc")) // 0
console.log(countPalindromicSubsequence("bbcbaba")) // 4

// 4/1/2025
