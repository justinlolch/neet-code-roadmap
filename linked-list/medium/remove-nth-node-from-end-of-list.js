/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const length = getNthFromEnd(head, n);/* Time O(N) */

    const isHead = length < 0;
    if (isHead) return head.next;

    let fast = moveFastWithDistance(head, n);
    let slow = head;

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return head;
};

const moveFastWithDistance = (head, n) => {
    let fast = head;

    for (let i = 0; i < n; i++)
        fast = fast.next;

    return fast;
}

const getNthFromEnd = (curr, n, length = 0) => {
    while (curr) {                       /* Time O(N) */
        curr = curr.next;
        length++;
    }

    return (length - n) - 1;
}

const test = () => {
    // const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))
    // removeNthFromEnd(head, 3);
    const head = new ListNode(1, null)
    removeNthFromEnd(head, 1);
    console.log(JSON.stringify(head))
}

test();