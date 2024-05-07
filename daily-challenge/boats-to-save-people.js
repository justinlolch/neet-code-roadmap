/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b);
    let [leftPt, rightPt] = [0, people.length - 1];
    let boat = 0;

    while (leftPt <= rightPt) {
        const remaining = limit - people[rightPt];
        boat++;
        if (remaining >= people[leftPt] && leftPt < rightPt)
            leftPt++;
        rightPt--;
    }

    return boat;
};

console.log(numRescueBoats([2, 49, 10, 7, 11, 41, 47, 2, 22, 6, 13, 12, 33, 18, 10, 26, 2, 6, 50, 10], 50)) // 11
console.log(numRescueBoats([1, 2], 3)) // 1
console.log(numRescueBoats([3, 2, 2, 1], 3)) // 3
console.log(numRescueBoats([3, 5, 3, 4], 5)) // 4

// 4/5/2024
