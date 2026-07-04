class MinStack {
    constructor() {
        this.s = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.s.length === 0) {
            this.s.push([val, val]);
        } else {
            let min = Math.min(val, this.s[this.s.length - 1][1]);
            this.s.push([val, min]);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.s.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.s[this.s.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.s[this.s.length - 1][1];
    }
}
