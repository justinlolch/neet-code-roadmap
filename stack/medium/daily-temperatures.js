/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const resultSet = new Array(temperatures.length).fill(0);
    const stack = []; // {temperature, index}

    for (const index in temperatures) {
        while (stack.length !== 0 && stack[stack.length - 1].temperature < temperatures[index]) {
            const colderDay = stack.pop();
            resultSet[colderDay.index] = index - colderDay.index;
        }
        stack.push({temperature: temperatures[index], index})
    }

    return resultSet
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])) // [1,1,1,0]
console.log(dailyTemperatures([30,60,90])) // [1,1,0]
