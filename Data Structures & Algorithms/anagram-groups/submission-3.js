class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let i = 0; i < strs.length; i++) {
            let hash = new Array(26).fill(0);
            let s = strs[i]

            for(let j = 0; j < s.length; j++){
                let index = s[j].charCodeAt() - "a".charCodeAt();
                ++hash[index] // *
            }

            let key = "";
            for(let k = 0; k < hash.length; k++){
                key = key + hash[k] + "#"; // * - delimiter
            }

            if (map.has(key)) { // * hash as key
                map.get(key).push(strs[i]);
            } else {
                map.set(key, [strs[i]]);
            }
        }
        return [...map.values()];
    }
}
// * See - Claude/DSA/8.14-15