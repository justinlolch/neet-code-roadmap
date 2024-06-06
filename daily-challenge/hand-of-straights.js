/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }

    hand.sort((a, b) => a - b);

    let cardCounts = new Map();

    for (const card of hand)
        cardCounts.set(card, (cardCounts.get(card) || 0) + 1);

    for (const card of hand) {
        if (cardCounts.get(card)) {
            for (let i = 0; i < groupSize; i++) {
                if (cardCounts.get(card + i) && cardCounts.get(card + i) > 0)
                    cardCounts.set(card + i, cardCounts.get(card + i) - 1);
                else
                    return false;

            }
        }
    }

    return true;
};

console.log(isNStraightHand([8, 8, 9, 7, 7, 7, 6, 7, 10, 6], 2)) // true
console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)) // true
console.log(isNStraightHand([1, 2, 3, 4, 5], 4)) // false

// 6/6/2024
