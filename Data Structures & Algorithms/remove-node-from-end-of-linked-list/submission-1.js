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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let sentinel = new ListNode(); // dummy node - to guard n = length corner case.
        sentinel.next = head;
        let p1 = sentinel;
        let p2 = sentinel;

        // forming gap of n nodes
        for(let i = 0; i < n; i++){
            p2 = p2.next;
        }

        while(p2.next){
            p1 = p1.next;
            p2 = p2.next;
        }
        p1.next = p1.next.next;
        return sentinel.next; // returns original head or new head (in case of n = length)
    }
}
