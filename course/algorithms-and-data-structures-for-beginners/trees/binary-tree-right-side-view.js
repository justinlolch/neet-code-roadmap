function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    const result = [];
    const queue = [];

    let level = 0;
    if (root)
        queue.push(root);

    level += 1;
    while (queue.length !== 0) {
        const levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            const node = queue.shift();
            if (node.right)
                queue.push(node.right)
            if (node.left)
                queue.push(node.left);
            if (i === 0)
                result.push(node.val);
        }
        level += 1;
    }
    return result;
};

console.log(rightSideView(new TreeNode(3, new TreeNode(1, undefined, new TreeNode(2, undefined, undefined)), new TreeNode(4, undefined, undefined))));
