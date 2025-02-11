function clearDigits(s: string): string {
    const stack: string[] = [];

    const isDigit: (char: string) => boolean = (char: string): boolean => char.length === 1 && char >= "0" && char <= "9";

    for (let i: number = 0; i < s.length; i++) {
        if (isDigit(s[i])) {
            stack.pop();
        } else
            stack.push(s[i]);
    }

    return stack.join("");
}

console.log(clearDigits("abc")) // "abc"
console.log(clearDigits("cb34")) // ""

// 10/2/2025
