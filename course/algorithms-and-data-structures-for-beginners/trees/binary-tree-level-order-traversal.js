function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const result = [];
    const queue = [];

    if (root)
        queue.push(root);

    while (queue.length !== 0) {
        const levelArray = [];
        const levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            const node = queue.shift();
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
            levelArray.push(node.val);
        }
        result.push(levelArray);
    }
    return result;
};

console.log(levelOrder(new TreeNode(3, new TreeNode(1, undefined, new TreeNode(2, undefined, undefined)), new TreeNode(4, undefined, undefined))));
