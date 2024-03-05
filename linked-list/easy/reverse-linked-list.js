/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let [prev, curr] = [null, head];

    while (curr) {
        let next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
};

// recursion
var reverseList = function(head) {
    if (!head)
        return null;

    let newHead = head;
    if (head.next) {
        newHead = reverseList(head.next);
        head.next.next = head;
    }

    head.next = null;
    return newHead;

    // 1 -> 2 -> 3
};
