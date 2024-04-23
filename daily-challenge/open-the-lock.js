/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    let current = "0000";

    const helper = (lock, visited) => {
        const combinations = [];

        for (let i = 0; i < 4; i++) {
            let combination;
            combination = lock.split("").map((char, index) => index === i ? ((parseInt(char) + 1) % 10).toString() : char).join("");
            combinations.push(combination);
            combination = lock.split("").map((char, index) => index === i ? ((parseInt(char) - 1 + 10) % 10).toString() : char).join("");
            combinations.push(combination);
        }

        return combinations;
    };

    let count = 0;
    const visited = new Set(deadends);
    const queue = [current];
    while (queue.length > 0) {
        const currentQueueLength = queue.length;
        for (let i = 0; i < currentQueueLength; i++) {
            const currentTest = queue.shift();
            if (visited.has(currentTest))
                continue;
            if (currentTest === target)
                return count;

            visited.add(currentTest);
            const combinations = helper(currentTest, visited);
            for (const combination of combinations)
                if (!visited.has(combination))
                    queue.push(combination);
        }
        count++;
    }

    return -1;
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202")) // 6
console.log(openLock(["8888"], "0009")) // 1
console.log(openLock(["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], "8888")) // -1

// 22/4/2024
