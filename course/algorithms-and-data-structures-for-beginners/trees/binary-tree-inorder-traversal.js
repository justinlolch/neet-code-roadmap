function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const result = [];
    inorder(root, (val) => result.push(val));
    return result;
};

const inorder = (node, cb) => {
    if (!node)
        return;

    inorder(node.left, cb);
    cb(node.val);
    inorder(node.right, cb);
}