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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    rotateRight(head, k) {
        if (!head || !head.next) return head;
        // calc length
        let curr = head;
        let len = 0;
        while (curr) {
            ++len;
            curr = curr.next;
        }
        // narrow k
        k = k % len;
        if (k == len || k === 0) return head;

        // 2 pointer with gap of k
        curr = head;
        let prev = head;
        while (k) {
            curr = curr.next;
            --k;
        }
        // traverse and rewire
        while (curr.next) {
            curr = curr.next;
            prev = prev.next;
        }
        curr.next = head;
        let newHead = prev.next;
        prev.next = null;
        return newHead;
    }
}
