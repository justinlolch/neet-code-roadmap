function shiftingLetters(s: string, shifts: number[][]): string {
    const n: number = s.length;
    const diffArray: number[] = new Array(n).fill(0);

    for (const moves of shifts) {
        const [start, end, direction] = moves;
        if (direction === 1) {
            diffArray[start] += 1;
            if (end + 1 < n)
                diffArray[end + 1] -= 1;
        }
        else {
            diffArray[start] -= 1;
            if (end + 1 < n)
                diffArray[end + 1] += 1;
        }
    }

    const result: string[] = s.split("");
    let numOfShifts: number = 0;

    for (let i: number = 0; i < n; i++) {
        numOfShifts = (numOfShifts + diffArray[i]) % 26;
        if (numOfShifts < 0)
            numOfShifts += 26;

        result[i] = String.fromCharCode((s.charCodeAt(i) - "a".charCodeAt(0) + numOfShifts) % 26 + "a".charCodeAt(0));
    }

    return result.join("");
}

console.log(shiftingLetters("abc", [[0, 1, 0], [1, 2, 1], [0, 2, 1]])) // "ace"
console.log(shiftingLetters("dztz", [[0, 0, 0], [1, 1, 1]])) // "catz"

// 5/1/2025
