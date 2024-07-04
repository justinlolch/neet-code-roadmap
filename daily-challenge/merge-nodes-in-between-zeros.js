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
var mergeNodes = function (head) {
    let result = new ListNode();
    let current = result;
    let curSum;

    while (head) {
        if (head.val === 0) {
            if (curSum === undefined) {
                curSum = 0;
            } else {
                current.next = new ListNode(curSum);
                current = current.next;
                curSum = 0;
            }
        } else {
            curSum += head.val;
        }

        head = head.next;
    }


    return result.next;
};

// 4/7/2024
