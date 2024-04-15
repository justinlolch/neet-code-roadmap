function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    const prefix = [];
    let sum = 0;

    const dfs = (node) => {

        if (!node.left && !node.right) {
            prefix.push(node.val);
            sum = sum + parseInt(prefix.join(""));
            prefix.pop();
            return;
        }

        prefix.push(node.val);

        if (node.left) {
            dfs(node.left);
        }

        if (node.right) {
            dfs(node.right);
        }
        prefix.pop();
    }

    dfs(root);
    return sum;
};

console.log(sumNumbers(new TreeNode(1, new TreeNode(2, undefined, undefined), new TreeNode(3, undefined, undefined))))

// 7/4/2024