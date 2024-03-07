const mergeSort = (nums, leftPt, rightPt) => {
    if (leftPt < rightPt) {
        const middle = (leftPt + rightPt) >> 1;
        mergeSort(nums, leftPt, middle);
        mergeSort(nums, middle + 1, rightPt);
        merge(nums, leftPt, middle, rightPt);
    }

    return nums;
}

const merge = (nums, left, middle, right) => {
    const leftArr = [];
    const rightArr = [];

    let leftLength = middle - left + 1;
    let rightLength = right - middle;

    for (let i = 0; i < leftLength; i++)
        leftArr.push(nums[left + i])
    for (let i = 0; i < rightLength; i++)
        rightArr.push(nums[middle + 1 + i])

    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftLength && j < rightLength) {
        const leftV = leftArr[i];
        const rightV = rightArr[j];

        if (leftV < rightV) {
            nums[k] = leftV;
            i++;
        } else {
            nums[k] = rightV;
            j++;
        }
        k++;
    }

    while (i < leftLength) {
        nums[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < rightLength) {
        nums[k] = rightArr[j];
        j++;
        k++;
    }

}

const main = (nums) => {
    return mergeSort(nums, 0, nums.length - 1);
}

console.log(main([5, 4, 3, 2, 1]))
