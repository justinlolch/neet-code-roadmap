/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const squareMap = new Map();
    const [ROWS, COLS] = [matrix[0].length, matrix.length];
    let max = 0;

    const search = (r, c) => {
        if (r >= ROWS || c >= COLS)
            return 0;

        if (!squareMap.has(`${r}-${c}`)) {
            const right = squareMap.has(`${r + 1}-${c}`) ? squareMap.get(`${r + 1}-${c}`) : search(r + 1, c);
            const diagonal = squareMap.has(`${r + 1}-${c + 1}`) ? squareMap.get(`${r + 1}-${c + 1}`) : search(r + 1, c + 1);
            const down = squareMap.has(`${r}-${c + 1}`) ? squareMap.get(`${r}-${c + 1}`) : search(r, c + 1);

            let area = 0;
            if (matrix[c][r] === '1') {
                area = Math.min(right, diagonal, down) + 1
                max = Math.max(area, max);
            }
            squareMap.set(`${r}-${c}`, area);
        }
        return squareMap.get(`${r}-${c}`);
    };

    search(0, 0);

    return Math.pow(max, 2);
};

console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]])) // 4
console.log(maximalSquare([["0", "1"], ["1", "0"]])) // 1
console.log(maximalSquare([["0"]])) // 0
