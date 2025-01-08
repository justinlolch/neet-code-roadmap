function countPrefixSuffixPairs(words: string[]): number {
    const isPrefixAndSuffix = (str1: string, str2: string): boolean => {
           return str2.startsWith(str1) && str2.endsWith(str1);
    };

    let ans: number = 0;
    for (let i: number = 0; i < words.length - 1; i++) {
        for (let j: number = 1; j < words.length; j++) {
            if (i < j) {
                ans += isPrefixAndSuffix(words[i], words[j]) ? 1 : 0;
            }
        }
    }

    return ans;
}

console.log(countPrefixSuffixPairs(["a","aba","ababa","aa"])) // 4
console.log(countPrefixSuffixPairs(["pa","papa","ma","mama"])) // 2
console.log(countPrefixSuffixPairs(["abab","ab"])) // 0

// 8/1/2025
