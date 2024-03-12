function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root)
        return false;

    targetSum -= root.val;
    if (!root.left && !root.right) {
        if (targetSum === 0)
            return true;
    }
    if (hasPathSum(root.left, targetSum))
        return true;
    if (hasPathSum(root.right, targetSum))
        return true;
    targetSum += root.val;
    return false;
};

console.log(hasPathSum(new TreeNode(1, new TreeNode(2), new TreeNode(3)),3));