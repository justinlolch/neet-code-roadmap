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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    if (root === null) return null;
    const inorderTraversal = [];

    const inorder = (root, nodes) => {
        if (root === null) return;
        inorder(root.left, nodes);
        nodes.push(root);
        inorder(root.right, nodes);
    }

    const buildTree = (nodes, start, end) => {
        if (end < start) return null;
        const mid = Math.floor((end - start) / 2) + start;
        const root = nodes[mid];
        root.left = buildTree(nodes, start, mid - 1);
        root.right = buildTree(nodes, mid + 1, end);
        return root;
    }

    inorder(root, inorderTraversal);
    return buildTree(inorderTraversal, 0, inorderTraversal.length - 1);
};

// 26/6/2024
