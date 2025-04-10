function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
    const res: number[] = [];
    const digits: string[] = Array.from({length: limit + 1}, (_, i) => i.toString());
    const suffixLength: number = s.length;

    const maxDigits: number = finish.toString().length;

    for (let len: number = suffixLength; len <= maxDigits; len++) {
        const prefixLength: number = len - suffixLength;

        const generate = (prefix: string) => {
            if (prefix.length === prefixLength) {
                const numStr: string = prefix + s;
                const num: number = parseInt(numStr);
                if (num >= start && num <= finish) {
                    res.push(num);
                }
                return;
            }

            for (let d of digits) {
                if (prefix.length === 0 && d === '0' && prefixLength !== 0) continue; // Skip leading 0s
                generate(prefix + d);
            }
        };

        generate("");
    }

    return res.length;
}

console.log(numberOfPowerfulInt(1, 6000, 4, "124")) // 5
console.log(numberOfPowerfulInt(15, 215, 6, "10")) // 2
console.log(numberOfPowerfulInt(1000, 2000, 4, "3000")) // 0

// 10/4/2025
