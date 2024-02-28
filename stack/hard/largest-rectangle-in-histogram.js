/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = []; // {index, height}
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1].height <= heights[i]) {
            stack.push({index: i, height: heights[i]});
            continue;
        }

        let extendableIndex;
        while (stack.length > 0 && stack[stack.length - 1].height >= heights[i]) {
            const last = stack.pop();
            const area = last.height * (i - last.index);
            maxArea = Math.max(maxArea, area);
            extendableIndex = last.index;
        }
        stack.push({height: heights[i], index: extendableIndex});

        if (i === heights.length - 1)
            stack.push({height: heights[i], index: i});
    }

    for (const s of stack) {
        // calculate vertical possible area
        const verticalArea = s.height;

        // calculate horizontal possible area
        const horizontalArea = s.height * (stack[stack.length-1].index - s.index + 1)

        maxArea = Math.max(maxArea, verticalArea, horizontalArea);
    }

    return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])) // 10
console.log(largestRectangleArea([2,4])) // 4
console.log(largestRectangleArea([2,2,3,3,3,3,3])) // 15
console.log(largestRectangleArea([5,5,1,7,1,1,5,2,7,6])) // 12
