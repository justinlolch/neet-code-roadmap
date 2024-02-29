/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const leftMax = [];
    const minHeight = [];
    let waterTrap = 0;

    let currentMax = 0;
    for (let i = 0; i < height.length; i++) {
        leftMax.push(currentMax);
        currentMax = Math.max(height[i], currentMax);
    }

    currentMax = 0;
    for (let i = height.length-1; i >= 0; i--) {
        minHeight[i] = Math.min(currentMax, leftMax[i]);
        currentMax = Math.max(height[i], currentMax);
    }

    for (let i = 0; i < height.length; i++) {
        const maxWaterCanTrap = minHeight[i];
        const trapWater = maxWaterCanTrap - height[i];
        if (trapWater > 0) {
            waterTrap += trapWater;
        }
    }

    return waterTrap;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trap([4,2,0,3,2,5])) // 9
