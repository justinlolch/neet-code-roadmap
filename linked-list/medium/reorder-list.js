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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const middle = getMid(head);
    const reversedSecondPortion = reverseList(middle);

    reorder(head, reversedSecondPortion);
};

const reorder = (head, secondPort) => {
    let [first, temp, second] = [head, null, secondPort];

    while (second.next) {
        temp = first.next;
        first.next = second;
        first = temp;

        temp = second.next;
        second.next = first;
        second = temp;
    }

}

const reverseList = (head) => {
    let [prev, curr, next] = [null, head, null];

    while (curr) {
        next = curr.next;
        curr.next = prev;

        prev = curr
        curr = next;
    }

    return prev;
}

const getMid = (head) => {
    let [fast, slow] = [head.next, head];

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}


const test = () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))))
    reorderList(head);
    console.log(JSON.stringify(head))
}

test();
