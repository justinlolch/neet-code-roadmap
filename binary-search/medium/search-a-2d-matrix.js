/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let leftRowIndex = 0;
    let rightRowIndex = matrix.length - 1;

    while (leftRowIndex <= rightRowIndex) {
        let middleRowIndex = Math.floor((leftRowIndex+rightRowIndex)/2);
        const currentRow = matrix[middleRowIndex];
        // check target value is on previous row, following row or currentRow;
        // if (currentRow.length === 0)
        //     matrix.splice(middleRowIndex, 1)

        if (currentRow[0] === target || currentRow[currentRow.length-1] === target)
            return true;

        if (currentRow[0] > target)
            rightRowIndex = middleRowIndex - 1;

        if (currentRow[currentRow.length-1] < target)
            leftRowIndex = middleRowIndex + 1;

        if (currentRow[currentRow.length-1] > target && currentRow[0] < target) {
            const index = binarySearch(currentRow, target)
            return index >= 0;

        }
    }

    const row = matrix[Math.floor((leftRowIndex+rightRowIndex)/2)];
    if (!row)
        return false;
    const index = binarySearch(row, target)
    return index >= 0;
};

const binarySearch = (nums, target) => {
    let leftPt = 0;
    let rightPt = nums.length - 1;

    while (leftPt <= rightPt) {
        let middle = Math.floor((leftPt+rightPt)/2);
        const current = nums[middle];
        if (current === target)
            return middle;

        if (current < target)
            leftPt = middle + 1;

        if (current > target)
            rightPt = middle - 1;
    }
    return -1;
}

console.log(searchMatrix([[1]],0)) // false
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13)) // false
console.log(searchMatrix([[1,3,5,7],[],[23,30,34,60]],3)) // true
