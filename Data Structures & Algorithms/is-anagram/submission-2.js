class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let map = new Map();

        for (let i = 0; i < s.length; i++) {
            if (!map.has(s[i])) {
                map.set(s[i], 1);
            } else {
                map.set(s[i], map.get(s[i]) + 1);
            }
        }

        for (let j = 0; j < t.length; j++) {
            if (map.has(t[j]) && map.get(t[j]) > 0) {
                map.set(t[j], map.get(t[j]) - 1);
            } else {
                console.log(map, j)
                return false;
            }
        }

        return true;
    }
}
