class MyQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.s1.push(x);
    }

    _toS2() {
        let n = this.s1.length;
        for (let i = 0; i < n; i++) {
            this.s2.push(this.s1.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.s2.length == 0) this._toS2();
        return this.s2.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        if (this.s2.length == 0) this._toS2();
        return this.s2[this.s2.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.s1.length == 0 && this.s2.length == 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
