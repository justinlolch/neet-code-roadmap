function wordSubsets(words1: string[], words2: string[]): string[] {
    const counter2 = new Counter();

    for (const word of words2) {
        const tempCounter = new Counter();
        for (const char of word)
            tempCounter.increment(char);
        counter2.merge(tempCounter);
    }

    const result: string[] = [];
    for (const word of words1) {
        const tempCounter = new Counter();
        for (const char of word)
            tempCounter.increment(char);

        let isUniversal: boolean = true;
        for (const [key, value] of counter2.values()) {
            if (tempCounter.get(key) < value) {
                isUniversal = false;
                break;
            }
        }

        if (isUniversal)
            result.push(word);
    }

    return result;
}

class Counter {
    private map: Map<any, number> = new Map();

    increment(key: any, value: number = 1) {
        this.map.set(key, (this.map.get(key) || 0) + value);
    }

    get(key: any): number {
        return this.map.get(key) || 0;
    }

    values(): IterableIterator<[any, number]> {
        return this.map.entries();
    }

    merge(counter: Counter): void {
        for (const [key, value] of counter.values()) {
            this.map.set(key, Math.max(this.get(key), value));
        }
    }
}

console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"])) // ["facebook","google","leetcode"]
console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"])) // ["apple","google","leetcode"]

// 10/1/2025
