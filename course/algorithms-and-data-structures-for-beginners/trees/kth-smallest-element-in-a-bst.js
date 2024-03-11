function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const result = [];
    inorder(root, k, result);
    return result[k-1];
};

const inorder = (node, k, res) => {
    if (!node)
        return;

    inorder(node.left, k, res);
    res.push(node.val);
    if (res.length === k)
        return;
    inorder(node.right, k, res);
}

console.log(kthSmallest(new TreeNode(3, new TreeNode(1, undefined, new TreeNode(2, undefined, undefined)), new TreeNode(4, undefined, undefined)), 1));