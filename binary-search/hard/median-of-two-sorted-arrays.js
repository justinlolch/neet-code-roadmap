/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const isEvenLengthOfMergedArrays = totalLength % 2 === 0;
    const shorterArray = nums1.length < nums2.length ? nums1 : nums2;
    const longerArray = shorterArray === nums1 ? nums2 : nums1;
    let medianPosition = totalLength >> 1;

    let [leftPt, rightPt] = [0, shorterArray.length - 1];

    while (true) {
        let middlePt = (leftPt + rightPt) >> 1; // shorter arrays
        let longerMid = medianPosition - middlePt - 2;

        let shorterLeft = middlePt >= 0 ? shorterArray[middlePt] : -Infinity;
        let shorterRight = (middlePt + 1) < shorterArray.length ? shorterArray[middlePt + 1] : Infinity;
        let longerLeft = longerMid >= 0 ? longerArray[longerMid] : -Infinity;
        let longerRight = (longerMid + 1) < longerArray.length ? longerArray[longerMid + 1] : Infinity;

        if (shorterLeft <= longerRight && longerLeft <= shorterRight){
            if (isEvenLengthOfMergedArrays) {
                return (Math.max(shorterLeft, longerLeft) + Math.min(shorterRight, longerRight)) / 2;
            }
            else return Math.min(shorterRight, longerRight);
        }
        else if (shorterLeft > longerRight) {
            // shorter is too big, make it smaller
            rightPt = middlePt - 1;
        } else {
            leftPt = middlePt + 1;
        }
    }
}

console.log(findMedianSortedArrays([1, 3], [2])) // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])) // 2.5
