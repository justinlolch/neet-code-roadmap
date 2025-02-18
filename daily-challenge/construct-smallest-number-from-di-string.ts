function smallestNumber(pattern: string): string {
    const res: number[] = [];
    const stack: number[] = [];

    for (let i: number = 0 ; i <= pattern.length; i++) {
        stack.push(i+1);

        while (stack.length > 0 && (i === pattern.length || pattern[i] === "I"))
            res.push(<number>stack.pop());
    }

    return res.join("")
}

console.log(smallestNumber("IIIDIDDD")) // "123549876"
console.log(smallestNumber("DDD")) // "4321"

// 18/2/2025
