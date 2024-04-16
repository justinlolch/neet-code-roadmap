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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1)
        return new TreeNode(val, root, undefined);

    let curDepth = 1;
    const queue = [root];

    while (queue.length > 0) {
        if (curDepth === depth - 1)
            break;

        const currentLength = queue.length;
        for (let i = 0; i < currentLength; i++) {
            const node = queue.shift();

            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }
        curDepth++;
    }

    for (const node of queue) {
        const newLeft = new TreeNode(val, node.left, undefined);
        const newRight = new TreeNode(val, undefined, node.right);
        node.left = newLeft;
        node.right = newRight;
    }
    return root;
};


// 16/4/2024
