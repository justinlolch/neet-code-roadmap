function maximumTripletValue(nums: number[]): number {
    let res: number = -Infinity;

    for (let i: number = 0; i < nums.length - 2; i++) {
        for (let j: number = i + 1; j < nums.length - 1; j++) {
            for (let k: number = j + 1; k < nums.length; k++) {
                res = Math.max(res, (nums[i] - nums[j]) * nums[k]);
            }
        }
    }

    return res > 0 ? res : 0;
}

console.log(maximumTripletValue([12, 6, 1, 2, 7])) // 77
console.log(maximumTripletValue([1, 10, 3, 4, 19])) // 133
console.log(maximumTripletValue([1, 2, 3])) // 0

// 2/4/2025
