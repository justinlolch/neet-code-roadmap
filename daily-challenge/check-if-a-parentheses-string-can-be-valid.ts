function canBeValid(s: string, locked: string): boolean {
    const unlockStack: number[] = [];
    const lockedStack: number[] = [];

    for (let i: number = 0; i < s.length; i++) {
        if (locked[i] === "0")
            unlockStack.push(i);
        else if (s[i] === "(")
            lockedStack.push(i);
        else {
            if (lockedStack.length > 0)
                lockedStack.pop();
            else if (unlockStack.length > 0)
                unlockStack.pop();
            else return false;
        }
    }

    while (lockedStack.length > 0 && unlockStack.length > 0 && lockedStack[lockedStack.length - 1] < unlockStack[unlockStack.length - 1]) {
        lockedStack.pop();
        unlockStack.pop();
    }

    if(lockedStack.length > 0)
        return false;

    return unlockStack.length % 2 === 0;
}

console.log(canBeValid("))()))", "010100")) // true
console.log(canBeValid("()()", "0000")) // true
console.log(canBeValid(")", "0")) // false

// 12/1/2025
