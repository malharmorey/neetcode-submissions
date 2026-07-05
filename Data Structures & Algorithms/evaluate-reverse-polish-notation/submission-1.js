class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let s = [];
        let map = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };
        
        for (let i = 0; i < tokens.length; i++) {
            if (map[tokens[i]]) {
                let b = s.pop();
                let a = s.pop();
                let ans = map[tokens[i]](+a, +b);
                s.push(ans);
            } else {
                s.push(+tokens[i]);
            }
        }
        return s.pop();
    }
}
