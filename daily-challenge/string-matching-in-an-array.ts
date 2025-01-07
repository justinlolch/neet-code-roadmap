function stringMatching(words: string[]): string[] {
    const res: string[] = [];

    for (let i: number = 0; i < words.length; i++) {
        for (let j: number = 0; j < words.length; j++){
            if (i === j)
                continue;

            if (words[j].includes(words[i])) {
                res.push(words[i]);
                break;
            }
        }
    }

    return res;
}

console.log(stringMatching(["mass","as","hero","superhero"])) // ["as","hero"]
console.log(stringMatching(["leetcode","et","code"])) // ["et","code"]
console.log(stringMatching(["blue","green","bu"])) // []

// 7/1/2025
