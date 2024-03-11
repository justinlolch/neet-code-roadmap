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
    let root;
    let current = new TreeNode();
    let btRoot;

    const set = new Set();
    let rightFlag = false;

    for (const val of preorder) {
        if (!current.val && !rightFlag) {
            current.val = val;
            set.add(val);
            root = current;
            if (!btRoot)
                btRoot = root;
            if (val === inorder[0]) {
                // next preorder val = root.right
                let rootVal = inorder.shift();
                while (set.has(rootVal)) {
                    rootVal = inorder.shift();
                }
                inorder.unshift(rootVal);
                set.clear();
                rightFlag = true;
            }
            continue;
        }

        if (rightFlag) {
            current = new TreeNode(val);
            root.right = current;
            root = root.right;
            set.add(val);
            rightFlag = false;
            continue;
        }

        current.left = new TreeNode(val);
        current = current.left;
        set.add(val);
        if (val === inorder[0]) {
            // next preorder val = root.right
            let rootVal = inorder.shift();
            while (set.has(rootVal)) {
                rootVal = inorder.shift();
            }
            inorder.unshift(rootVal);
            set.clear();
            rightFlag = true;
        }

    }
    return btRoot;
};

buildTree([3,9,20,15,7], [9,3,15,20,7])