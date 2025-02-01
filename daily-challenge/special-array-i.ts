function isArraySpecial(nums: number[]): boolean {
    let isLastNumEven: boolean = nums[0] % 2 === 0;

    for (let i: number = 1; i < nums.length; i++) {
        const current: boolean = nums[i] % 2 === 0;
        if (isLastNumEven === current)
            return false
        else isLastNumEven = current
    }

    return true;
}

console.log(isArraySpecial([1])) // true
console.log(isArraySpecial([2, 1, 4])) // true
console.log(isArraySpecial([4, 3, 1, 6])) // false

// 1/2/2025
