/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) { // Brute force approach
        let map = new Map();
        let curr = headA;
        while (curr) {
            map.set(curr);
            curr = curr.next;
        }

        curr = headB;
        while (curr) {
            if (map.has(curr)) {
                return curr;
            }
            curr = curr.next;
        }
        return null;
    }
}
