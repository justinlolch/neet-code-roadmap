function minOperations(boxes: string): number[] {
    const res: number[] = new Array(boxes.length).fill(0);
    let [balls, moves]: [number, number] = [0,0];

    for (let i: number = 0; i < boxes.length; i++) {
        res[i] = balls + moves;
        moves += balls;
        balls += parseInt(boxes[i]);
    }

    [balls, moves] = [0, 0];
    for (let i: number = boxes.length - 1; i >= 0; i--) {
        res[i] += balls + moves;
        moves += balls;
        balls += parseInt(boxes[i]);
    }

    return res;
}

console.log(minOperations("110")) // [1,1,3]
console.log(minOperations("001011")) // [11,8,5,4,3,4]

// 6/1/2025
