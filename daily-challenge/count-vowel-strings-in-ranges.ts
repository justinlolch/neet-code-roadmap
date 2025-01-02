function vowelStrings(words: string[], queries: number[][]): number[] {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const prefixSum = new Array(words.length).fill(0);
    const ans = new Array(queries.length).fill(0);
    let sum = 0;

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        if (
            vowels.has(currentWord[0]) &&
            vowels.has(currentWord[currentWord.length - 1])
        ) {
            sum += 1;
        }
        prefixSum[i] = sum;
    }

    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i];
        ans[i] =
            prefixSum[end] - (start === 0 ? 0 : prefixSum[start - 1]);
    }

    return ans;
}

console.log(vowelStrings(["aba", "bcb", "ece", "aa", "e"], [[0, 2], [1, 4], [1, 1]])) // [2,3,0]
console.log(vowelStrings(["a", "e", "i"], [[0, 2], [0, 1], [2, 2]])) // [3,2,1]

// 2/1/2025