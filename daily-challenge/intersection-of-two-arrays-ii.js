/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map = new Map();
    const isNum1Larger = nums1.length > nums2.length;
    const smallerArray = isNum1Larger ? nums2 : nums1;
    const largerArray = isNum1Larger ? nums1 : nums2;
    const result = [];

    for (const n of smallerArray)
        map.set(n, (map.get(n) ?? 0) + 1);

    for (const n of largerArray) {
        if (map.has(n)) {
            const count = map.get(n);
            if (count > 0) {
                result.push(n);
                map.set(n, count - 1);
            }
        }
    }

    return result;
};

console.log(intersect([1, 2, 2, 1], nums2 = [2, 2])) // [2,2]
console.log(intersect([4, 9, 5], nums2 = [9, 4, 9, 8, 4])) // [4,9]

// 2/7/2024
