/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let leftPt = 1;
    let rightPt = Math.max(...piles);

    while (leftPt < rightPt) {
        const speed = Math.floor((leftPt + rightPt) / 2);
        const hoursTaken = piles.map(numB => Math.ceil(numB / speed)).reduce((acc, hour) => acc + hour, 0);

        if (hoursTaken > h)
            leftPt = speed + 1;

        if (hoursTaken <= h) {
            rightPt = speed;
        }
    }
    return rightPt;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)) // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)) // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)) // 23
console.log(minEatingSpeed([312884470], 312884469)) // 2
