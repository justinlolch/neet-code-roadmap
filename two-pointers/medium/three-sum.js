/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    const target = 0;
    const answerMap = new Map();
    const checkedSelf = new Set();

    for (let index = 0; index < sortedNums.length; index++) {
        let leftPt = 0;
        let rightPt = sortedNums.length - 1;
        const current = sortedNums[index];
        if (checkedSelf.has(current))
            continue;

        checkedSelf.add(current);

        while (leftPt !== rightPt) {
            if (leftPt === index) {
                leftPt = index + 1;
                continue;
            }

            if (rightPt === index) {
                rightPt = index - 1;
                continue;
            }

            const sum = sortedNums[leftPt] + sortedNums[rightPt];
            if ((sum + current) === target) {
                const answer = [current, sortedNums[leftPt], sortedNums[rightPt]].sort((a, b) => a - b);
                if (!answerMap.has(answer.join(""))) {
                    answerMap.set(answer.join(""), answer);
                }
            }

            const expected = target - current;
            if (sum < expected) {
                leftPt += 1;
                continue;
            }

            // sum > expected => +1 , but also for have answer and continue to search
            rightPt -= 1;
        }
    }

    const resultSet = [];
    for (const values of answerMap.values()) {
        resultSet.push(values);
    }

    return resultSet;
};

console.log(threeSum([-2, 0, 1, 1, 2])) // [[-2,0,2],[-2,1,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])) // []
console.log(threeSum([0,0,0])) // [[0,0,0]]
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])) // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
