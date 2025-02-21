class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

class FindElements {
    valueSet: Set<number>;

    constructor(root: TreeNode | null) {
        this.valueSet = new Set();
        if (root !== null) {
            root.val = 0;
            this.valueSet.add(0);
            this.recoverTree(root);
        }
    }

    private recoverTree(node: TreeNode): void {
        if (node.left) {
            node.left.val = node.val * 2 + 1;
            this.valueSet.add(node.left.val);
            this.recoverTree(node.left);
        }
        if (node.right) {
            node.right.val = node.val * 2 + 2;
            this.valueSet.add(node.right.val);
            this.recoverTree(node.right);
        }
    }


    find(target: number): boolean {
        return this.valueSet.has(target);
    }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

const test: () => void = (): void => {
    const root = new TreeNode(-1, null, new TreeNode(-1))
    const tree = new FindElements(root);
    console.log(tree.find(1)) // false
    console.log(tree.find(2)) // true
}

test();

// 21/2/2025
