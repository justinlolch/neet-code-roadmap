/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 0 -> false
// 1 -> true
// 2 -> OR
// 3 -> AND

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {

    const dfs = (node) => {
        if (node.val === 0 || node.val === 1)
            return node.val === 1;

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (node.val === 2)
            return left || right;

        return left && right;

    };

    return dfs(root);
};

// 16/5/2024
