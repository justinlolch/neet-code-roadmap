function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const getNextVal = (list) => {
        let next = Infinity;
        let targetIndex;
        list.forEach((node, index) => {
            if (node && node.val < next) {
                next = node.val;
                targetIndex = index;
            }
        })
        return targetIndex;
    };

    let dummy = new ListNode();
    let current = dummy;
    while (lists.length > 0) {
        const nextIndex = getNextVal(lists);
        if (nextIndex === undefined)
            break;
        const value = lists[nextIndex].val;
        lists[nextIndex] = lists[nextIndex].next;
        lists = lists.filter(elem => elem );
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
};

console.log(mergeKLists([new ListNode(1, new ListNode(4, new ListNode(5))), new ListNode(1, new ListNode(3, new ListNode(4))), new ListNode(2, new ListNode(6))])) // 1->1->2->3->4->4->5->6
console.log(mergeKLists([])) // []
console.log(mergeKLists([[]])) // []
