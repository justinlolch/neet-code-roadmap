function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function (root) {
    let moves = 0;

    const formResult = (size, coins) => {
        return {size, coins};
    };

    const dfs = (node) => {
        if (!node)
            return formResult(0, 0);

        const {size: lSize, coins: lCoins} = dfs(node.left);
        const {size: rSize, coins: rCoins} = dfs(node.right);
        const size = lSize + rSize + 1;
        const coins = lCoins + rCoins + node.val;
        moves += Math.abs(coins - size);
        return formResult(size, coins);
    }
    dfs(root);
    return moves;
};

console.log(distributeCoins(new TreeNode(3, new TreeNode(0), new TreeNode(0)))) // 2
console.log(distributeCoins(new TreeNode(0, new TreeNode(3), new TreeNode(0)))) // 3

// 18/5/2024
