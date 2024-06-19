/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    if (m * k > bloomDay.length)
        return -1;

    let [start, end] = [0, Math.max(...bloomDay)];
    let res = -1;

    const numOfBouquetsCanMake = (mid) => {
        let num = 0;
        let count = 0;

        for (const day of bloomDay) {
            if (day <= mid)
                count++;
            else count = 0;

            if (count === k) {
                num += 1;
                count = 0;
            }
        }
        return num;
    }

    while (start <= end) {
        const mid = (start + end) >> 1;

        if (numOfBouquetsCanMake(mid) >= m) {
            res = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return res;
};

console.log(minDays([1, 10, 3, 10, 2], 3, 1)) // 3
console.log(minDays([1, 10, 3, 10, 2], 3, 2)) // -1
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)) // 12

// 19/6/2024
