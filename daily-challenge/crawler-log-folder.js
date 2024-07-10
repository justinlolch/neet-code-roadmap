/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    const stack = [];

    for (const log of logs) {
        if (log === "../")
            stack.pop();
        else if (log !== "./")
            stack.push(log);
    }

    return stack.length;
};

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"])) // 2
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"])) // 3
console.log(minOperations(["d1/", "../", "../", "../"])) // 0

// 10/7/2024
