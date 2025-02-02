function check(nums: number[]): boolean {
    const n: number = nums.length;
    let count: number = 1;

    for (let i: number = 1; i < 2 * n; i++) {
        if (nums[(i - 1) % n] <= nums[i % n])
            count += 1
        else count = 1
        if (count === n)
            return true
    }

    return n === 1;
}

console.log(check([3, 4, 5, 1, 2])) // true
console.log(check([2, 1, 3, 4])) // false
console.log(check([1, 2, 3])) // true

// 2/2/2025
