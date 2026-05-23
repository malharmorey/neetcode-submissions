class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (s[l].match(/[a-z0-9]/i) && s[r].match(/[a-z0-9]/i)) {
                if (s[l] !== s[r]) return false;
                ++l;
                --r;
            } else {
                if (!s[l].match(/[a-z0-9]/i)) ++l;
                if (!s[r].match(/[a-z0-9]/i)) --r;
            }
        }
        return true;
    }
}
