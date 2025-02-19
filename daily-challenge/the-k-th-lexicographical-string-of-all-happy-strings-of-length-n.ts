function getHappyString(n: number, k: number): string {
    const total: number = 3 * (2 ** (n - 1))

    if (k > total) return "";

    const res: string[] = [];
    let choices: string = "abc";

    k--;

    for (let i: number = 0; i < n; i++) {
        const partitionSize: number = 2 ** (n - i - 1);
        const index: number = Math.floor(k / partitionSize);

        const chosenChar: string = choices[index];
        res.push(chosenChar);

        choices = "abc".replace(chosenChar, "");

        k %= partitionSize;
    }

    return res.join("");
}

console.log(getHappyString(1, 3)) // "c"
console.log(getHappyString(1, 4)) // ""
console.log(getHappyString(3, 9)) // "cab"

// 19/2/2025
