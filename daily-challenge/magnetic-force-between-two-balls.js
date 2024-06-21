/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
    position.sort((a, b) => a - b);

    const placeBalls = (distance) => {
        let lastBallPosition = position[0];
        let count = 1;

        for (let i = 1; i < position.length; i++) {
            const currentPosition = position[i];

            if ((currentPosition - lastBallPosition) >= distance) {
                lastBallPosition = currentPosition;
                count++;
            }

            if (count === m)
                return true;
        }
        return false;
    }

    let [start, end] = [1, position[position.length - 1]];
    let res = 1;

    while (start <= end) {
        const mid = (start + end) >> 1;

        if (placeBalls(mid)) {
            res = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return res;
};

console.log(maxDistance([1, 2, 3, 4, 7], 3)) // 3
console.log(maxDistance([5, 4, 3, 2, 1, 1000000000], 2)) // 999999999

// 20/6/2024
