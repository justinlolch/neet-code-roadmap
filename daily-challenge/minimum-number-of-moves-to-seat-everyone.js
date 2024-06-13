/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    let minMoves = 0;

    for (let i = 0; i < students.length; i++) {
        minMoves += Math.abs(seats[i] - students[i]);
    }

    return minMoves;
};

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])) // 4
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])) // 7
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])) // 4

// 13/6/2024
