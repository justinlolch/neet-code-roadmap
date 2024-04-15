/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    const queue = [root];
    let sum = 0;

    const isLeaf = (node) => !node.left && !node.right;

    while (queue.length > 0) {
        const node = queue.shift();
        if (node.left) {
            queue.push(node.left);
            if (isLeaf(node.left))
                sum += node.left.val;
        }
        if (node.right)
            queue.push(node.right);

    }

    return sum;
};

// 8/4/2024