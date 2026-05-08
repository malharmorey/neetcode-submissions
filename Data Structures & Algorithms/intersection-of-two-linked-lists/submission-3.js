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
    getIntersectionNode(headA, headB) {
        let t1 = headA;
        let t2 = headB;
        while (t1 !== t2) {
            t1 = t1 === null ? headB : t1.next;
            t2 = t2 === null ? headA : t2.next;
        }
        return t1;
    }
}
