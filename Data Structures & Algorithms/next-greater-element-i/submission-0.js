class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let s = [];
        let n = nums2.length;
        let ngeMap = {};

        s.push(nums2[n - 1]);
        ngeMap[nums2[n - 1]] = -1;

        for (let i = n - 2; i >= 0; i--) {
            while (s.length) {
                if (s[s.length - 1] > nums2[i]) {
                    ngeMap[nums2[i]] = s[s.length - 1];
                    break;
                } else {
                    s.pop();
                }
            }
            if (s.length === 0) ngeMap[nums2[i]] = -1;
            s.push(nums2[i]);
        }
        return nums1.map((x) => ngeMap[x]);
    }
}
