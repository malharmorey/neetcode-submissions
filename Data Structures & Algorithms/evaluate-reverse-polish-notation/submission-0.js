class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let s = [];
        let map = {
            "+": "+",
            "-": "-",
            "/": "/",
            "*": "*",
        };
        for (let i = 0; i < tokens.length; i++) {
            if (map[tokens[i]]) {
                let b = s.pop();
                let a = s.pop();
                let ans = eval(`${a} ${tokens[i]} ${b}`);
                s.push(Math.trunc(ans));
            } else {
                s.push(tokens[i]);
            }
        }
        return s.pop();
    }
}
