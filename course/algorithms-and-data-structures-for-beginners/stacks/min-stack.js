class MinStack {

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (this.minStack.length !== 0) {
            if (this.minStack[this.minStack.length - 1] >= val) {
                this.minStack.push(val);
            }
        }
        else {
            this.minStack.push(val);
        }
    }

    pop() {
        const popValue = this.stack.pop();
        if (popValue === this.getMin())
            this.minStack.pop();
    }

    // gets the top element of the stack
    top() {
        return this.stack[this.stack.length - 1];
    }

    // retrieves the minimum element in the stack
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
