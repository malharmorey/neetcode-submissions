class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length-1;
        s = s.toLowerCase(); // *

        while(l < r){
            if(s[l].match(/[a-zA-Z0-9]/) && s[r].match(/[a-zA-Z0-9]/)){ // *
                if(s[l] !== s[r]) return false;
                ++l
                --r // *
            } else if(!s[l].match(/[a-zA-Z0-9]/)){
                ++l
            } else if(!s[r].match(/[a-zA-Z0-9]/)){
                --r
            }
        }
        return true;
    }
}
