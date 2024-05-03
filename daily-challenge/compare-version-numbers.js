/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const v1 = version1.split(".");
    const v2 = version2.split(".");

    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        let value1 = i >= v1.length ? 0 : parseInt(v1[i]);
        let value2 = i >= v2.length ? 0 : parseInt(v2[i]);

        if (value1 > value2)
            return 1;

        if (value1 < value2)
            return -1;
    }

    return 0;
};

console.log(compareVersion("1.01", "1.001")) // 0
console.log(compareVersion("1.0", "1.0.0")) // 0
console.log(compareVersion("0.1", "1.1")) // -1

// 3/5/2024
