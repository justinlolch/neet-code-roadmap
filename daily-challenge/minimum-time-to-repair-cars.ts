function repairCars(ranks: number[], cars: number): number {

    const numOfCarToRepairInMin = (rank: number, minutes: number): number => Math.floor(Math.sqrt(minutes / rank));

    let left: number = 0;
    let right: number = Math.max(...ranks) * cars * cars;
    let res: number = 0;

    while (left <= right) {
        const middle: number = Math.floor((left + right) / 2);
        let remainingCars: number = cars;
        for (const mechanic of ranks) {
            let repaired: number = numOfCarToRepairInMin(mechanic, middle);
            remainingCars -= repaired;
        }
        if (remainingCars > 0)
            left = middle + 1;
        else {
            res = middle;
            right = middle - 1;
        }
    }

    return res;
}

console.log(repairCars([1, 1, 3, 3], 74)) // 576
console.log(repairCars([4, 2, 3, 1], 10)) // 16
console.log(repairCars([5, 1, 8], 6)) // 16

// 16/3/2025
