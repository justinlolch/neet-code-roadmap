function minCapability(nums: number[], k: number): number {
    let left: number = Math.min(...nums);
    let right: number = Math.max(...nums);
    let res: number;

    const isValid = (capability: number): boolean => {
        let i: number = 0;
        let count: number = 0;
        while (i < nums.length) {
            if (nums[i] <= capability) {
                i += 2;
                count += 1;
            } else
                i += 1;
            if (count === k)
                break;
        }
        return count === k;
    }

    while (left <= right) {
        let middle: number = Math.floor((left + right) / 2);

        if (isValid(middle)) {
            res = middle;
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return res!!;
}

console.log(minCapability([2, 3, 5, 9], 2)) // 5
console.log(minCapability([2, 7, 9, 3, 1], 2)) // 2

// 15/3/2025
