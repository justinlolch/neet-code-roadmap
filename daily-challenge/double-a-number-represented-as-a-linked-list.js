function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {

    const double = (node) => {
        if (!node)
            return 0;

        const newValue = node.val * 2 + double(node.next);
        node.val = newValue % 10;
        return Math.floor(newValue / 10);
    }

    const leading = double(head);
    if (leading === 1)
        head = new ListNode(leading, head);

    return head;
};

console.log(doubleIt(new ListNode(1, new ListNode(8, new ListNode(9))))) // 3 7 8
console.log(doubleIt(new ListNode(9, new ListNode(9, new ListNode(9))))) // 1 9 9 8

// 7/5/2024
