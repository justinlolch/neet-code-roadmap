function canConstruct(s: string, k: number): boolean {
    if (k > s.length)
        return false;

    const map: Map<string, number> = new Map();
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let odd: number = 0;
    for (const value of map.values()) {
        odd += value % 2;
    }

    return odd <= k;
}

console.log(canConstruct("annabelle", 2)) // true
console.log(canConstruct("leetcode", 3)) // false
console.log(canConstruct("true", 4)) // true

// 11/1/2025
