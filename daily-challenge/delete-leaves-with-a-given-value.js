function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    const dfs = (node) => {
        if (node.left)
            node.left = dfs(node.left);

        if (node.right)
            node.right = dfs(node.right);

        if (!node.left && !node.right) {
            if (target === node.val)
                return null;
        }
        return node;
    };

    return dfs(root);
};

console.log(removeLeafNodes(new TreeNode(1, new TreeNode(2, new TreeNode(2)), new TreeNode(3, new TreeNode(2), new TreeNode(4))), 2)) // 1 -> 3 -> 4

// 17/5/2024
