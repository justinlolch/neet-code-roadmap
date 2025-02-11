function removeOccurrences(s: string, part: string): string {
    const sLength: number = s.length;
    const pLength: number = part.length;
    const stack: string[] = [];

    const isMatch: () => boolean = (): boolean => stack.slice(-pLength).join("") === part;

    for (let i: number = 0; i < sLength; i++) {
        stack.push(s[i]);

        if (stack.length >= pLength && isMatch())
            for (let j: number = 0; j <pLength; j++)
                stack.pop()
    }

    return stack.join("");
}

console.log(removeOccurrences("daabcbaabcbc", "abc")) // "dab"
console.log(removeOccurrences("axxxxyyyyb", "xy")) // "ab"

// 11/2/2025
