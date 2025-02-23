import {TreeNode} from "../base/TreeNode";

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
    if (!preorder.length || !postorder.length) return null;

    const root = new TreeNode(preorder[0]);

    if (preorder.length === 1) return root;

    const leftIndex: number = postorder.indexOf(preorder[1]);

    const leftTreeSize: number = leftIndex + 1;

    root.left = constructFromPrePost(preorder.slice(1, leftTreeSize + 1), postorder.slice(0, leftTreeSize));
    root.right = constructFromPrePost(preorder.slice(leftTreeSize + 1), postorder.slice(leftTreeSize, postorder.length - 1));

    return root;
}

console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1])) // [1,2,3,4,5,6,7]

// 23/2/2025
