function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length || !inorder.length)
        return null;

    const root = new TreeNode(preorder[0]);

    const rootIndexInInorder = inorder.findIndex(val => val === preorder[0]);
    root.left = buildTree(preorder.slice(1, rootIndexInInorder+1), inorder.slice(0, rootIndexInInorder));
    root.right = buildTree(preorder.slice(rootIndexInInorder+1), inorder.slice(rootIndexInInorder+1));

    return root;
};

buildTree([3,9,20,15,7], [9,3,15,20,7])