/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;
    let leftPt = 0;
    let rightPt = height.length - 1;

    while (leftPt !== rightPt) {
        const leftHeight = height[leftPt];
        const rightHeight = height[rightPt];
        const width = rightPt - leftPt;

        const area = Math.min(leftHeight, rightHeight) * width;
        result = Math.max(result, area);

        if (leftHeight > rightHeight) {
            rightPt -= 1;
            continue;
        }

        leftPt += 1;
    }

    return result;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))  // 49
console.log(maxArea([1,1])) // 1
