/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
    let leftPt = 0;
    let [maxWindow, currentWindow] = [0, 0];
    let base = 0;

    for (let rightPt = 0; rightPt < grumpy.length; rightPt++) {
        if (grumpy[rightPt] === 1)
            currentWindow += customers[rightPt];
        else base += customers[rightPt];

        if ((rightPt - leftPt + 1) > minutes) {
            if (grumpy[leftPt] === 1)
                currentWindow -= customers[leftPt];
            leftPt++;
        }
        maxWindow = Math.max(maxWindow, currentWindow);
    }

    return base + maxWindow;
};

console.log(maxSatisfied([4, 10, 10], [1, 1, 0], 2)) // 24
console.log(maxSatisfied([2, 6, 6, 9], [0, 0, 1, 1], 1)) // 17
console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)) // 16
console.log(maxSatisfied([1], [0], 1)) // 1

// 21/6/2024
