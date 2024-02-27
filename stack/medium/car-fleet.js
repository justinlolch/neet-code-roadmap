/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let numCarFleet = 0;
    const stack = [];

    const positionSpeed = position.map((pos, index) => {
        const sp = speed[index];
        return {pos: pos, sp: sp, arrivalTime: (target-pos) / sp}
    }).sort((a, b) => b.pos - a.pos);

    for (let index in positionSpeed) {
        index = parseInt(index);

        if (stack.length !== 0 && positionSpeed[index].arrivalTime > stack[0].arrivalTime) {
            stack.pop();
        }
        if (stack.length === 0) {
            numCarFleet += 1;
            stack.push(positionSpeed[index]);
        }
    }

    return numCarFleet;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])) // 3
console.log(carFleet(10, [3], [3])) // 1
console.log(carFleet(100, [0, 2, 4], [4, 2, 1])) // 1
console.log(carFleet(10, [6, 8], [3, 2])) // 2

