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
        let sentinel = new ListNode();
        sentinel.next = head;
        
        // find length
        let len = 1;
        while(head.next){
            head = head.next;
            ++len;
        }

        // find prev position - traverse till prev position
        let prevPos = len - n;
        let curr = sentinel;
        for(let i = 0; i < prevPos; i++){
            curr = curr.next
        }
        
        curr.next = curr.next.next;
        return sentinel.next;
    }
}
