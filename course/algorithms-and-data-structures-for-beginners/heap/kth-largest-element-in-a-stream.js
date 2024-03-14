class KthLargest {
    constructor(k, nums) {
        this.heap = [0, ...nums];
        this.k = k;
    }

    add(val) {
        let currentLength = this.heap.length;
        const isOdd = currentLength % 2 !== 0;
        if (!isOdd){
            // check + 1; parent
        }
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const obj = new KthLargest(3, [1,2,3,4])
