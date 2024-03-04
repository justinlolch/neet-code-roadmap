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
            const middleValue = arr[middlePt];

            if (leftValue.time === timestamp)
                return leftValue.value;

            if (middleValue.time === timestamp)
                return leftValue.value;

            if (rightValue.time === timestamp)
                return rightValue.value

            if (timestamp > rightValue.time)
                return rightValue.value;

            if (timestamp < leftValue.time)
                return ""

            if (leftValue.time < timestamp && timestamp < middleValue.time) {
                leftPt += 1;
                rightPt = middlePt - 1;
            }

            if (middleValue.time < timestamp && timestamp < rightValue.time) {
                leftPt = middlePt + 1;
                rightPt -= 1;
            }
        }
        return arr[leftPt - 1].value;
    }
}

const main = () => {
    const timeMap = new TimeMap();
    timeMap.set("love", "high", 10);
    timeMap.set("love", "low", 20);
    console.log(timeMap.get("love", 5));
    console.log(timeMap.get("love", 10));
    console.log(timeMap.get("love", 15));
    console.log(timeMap.get("love", 20));
    console.log(timeMap.get("love", 25));


    // timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
    // console.log(timeMap.get("foo", 1));         // return "bar"
    // console.log(timeMap.get("foo", 3));         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
    // timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
    // console.log(timeMap.get("foo", 4));         // return "bar2"
    // console.log(timeMap.get("foo", 5));         // return "bar2"
}

main();
