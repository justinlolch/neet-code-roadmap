class TimeMap {
    constructor() {
        this.map = new Map();
    }

    set(key, value, timestamp) {
        let arr;
        if (!this.map.has(key)) {
            arr = [];
        } else {
            arr = this.map.get(key);
        }
        arr.push({time: timestamp, value: value});
        this.map.set(key, arr);
    }

    get(key, timestamp) {
        if (!this.map.has(key))
            return "";

        const arr = this.map.get(key);

        let leftPt = 0;
        let rightPt = arr.length - 1;

        while (leftPt <= rightPt) {
            const middlePt = (leftPt + rightPt) >> 1;
            const leftValue = arr[leftPt];
            const rightValue = arr[rightPt];

        }

    }
}

const main = () => {
    const timeMap = new TimeMap();
    timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
    timeMap.get("foo", 1);         // return "bar"
    timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
    timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
    timeMap.get("foo", 4);         // return "bar2"
    timeMap.get("foo", 5);         // return "bar2"
}

main();
