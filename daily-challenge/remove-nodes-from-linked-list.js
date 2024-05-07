/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNodes(head) {
    const stack = [];

    while (head) {
        if (stack.length === 0)
            stack.push(head.val);
        else {
            while (stack.length !== 0 && stack[stack.length - 1] < head.val) {
                stack.pop();
            }
            stack.push(head.val);
        }
        head = head.next;
    }

    let newHead = new ListNode();
    let current = newHead;
    for (const value of stack) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return newHead.next;
};

// 6/5/2024
