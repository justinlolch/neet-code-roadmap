/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let currentTime = customers[0][0];
    let waitTime = 0;

    for (const cust of customers) {
        const arriveTime = cust[0];
        currentTime = Math.max(currentTime, arriveTime);
        const finishTime = currentTime + cust[1];
        waitTime += finishTime - arriveTime;
        currentTime = finishTime;
    }

    return waitTime / customers.length;
};

console.log(averageWaitingTime([[1,2],[2,5],[4,3]])) // 5.00000
console.log(averageWaitingTime([[5,2],[5,4],[10,3],[20,1]])) // 3.25000

// 9/7/2024
