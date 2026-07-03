class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.q1.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        let n = this.q1.length;
        for (let i = 0; i < n - 1; i++) {
            let x = this.q1.shift();
            this.q2.push(x);
        }
        let ans = this.q1.shift();
        this.q1 = this.q2;
        return ans;
    }

    /**
     * @return {number}
     */
    top() {
        let n = this.q1.length;
        for (let i = 0; i < n - 1; i++) {
            let x = this.q1.shift();
            this.q2.push(x);
        }
        let ans = this.q1.shift();
        this.q2.push(ans);
        this.q1 = this.q2;
        return ans;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.q1.length == 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
