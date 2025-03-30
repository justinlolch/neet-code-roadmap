function partitionLabels(s: string): number[] {
    const res: number[] = [];

    const charToLastIndex = new Map<string, number>();

    for (let i: number = 0; i < s.length; i++)
        charToLastIndex.set(s[i], i);

    let end: number = charToLastIndex.get(s[0])!!;
    let curSize: number = 1;

    for (let i: number = 0; i < s.length; i++) {
        if (end === i) {
            res.push(curSize);
            curSize = 0;
            if ((i + 1) < s.length)
                end = charToLastIndex.get(s[i + 1])!!;
        }
        curSize++;
        end = Math.max(charToLastIndex.get(s[i])!!, end);
    }

    return res;
}

console.log(partitionLabels("ababcbacadefegdehijhklij")) // [9,7,8]
console.log(partitionLabels("eccbbbbdec")) // [10]

// 30/3/2025
