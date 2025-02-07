function areAlmostEqual(s1: string, s2: string): boolean {
    let indexes: number[] = [];

    for (let i:number= 0; i<s1.length;i++) {
        if (s1[i]!== s2[i])
            indexes.push(i);
        if (indexes.length > 2)
            return false;
    }

    if (indexes.length === 2) {
        return s1[indexes[0]] === s2[indexes[1]] && s1[indexes[1]] === s2[indexes[0]];
    }

    return indexes.length === 0;
}

console.log(areAlmostEqual("bank", "kanb")) // true
console.log(areAlmostEqual("attack", "defend")) // false
console.log(areAlmostEqual("kelb", "kelb")) // true

// 5/2/2025
