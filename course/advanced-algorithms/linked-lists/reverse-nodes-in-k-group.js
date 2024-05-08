function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let dummy = new ListNode(0, head);
    let groupPrev = dummy;

    const getKthNode = (current, k) => {
        while (current && k > 0) {
            k -= 1;
            current = current.next;
        }
        return current;
    }

    while (true) {
        const kthNode = getKthNode(groupPrev, k);
        if (!kthNode)
            break;
        let nextGroup = kthNode.next;

        // reverse the group
        let [cur, prev] = [groupPrev.next, kthNode.next];
        while (cur !== nextGroup) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        const temp = groupPrev.next;
        groupPrev.next = kthNode;
        groupPrev = temp;
    }
    return dummy.next;
};

console.log(reverseKGroup(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)) // [2,1,4,3,5]
console.log(reverseKGroup(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 3)) // [3,2,1,4,5]
