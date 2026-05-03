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
        // finding length
        let len = 1;
        let curr = head;
        while(curr.next){
            curr = curr.next;
            ++len
        }

        // corner case
        if(n == len){
            let temp = head.next;
            head.next = null;
            head = temp;
            return head;
        }

        // forming gap of n nodes
        let p1 = head;
        let p2 = head;
        for(let i = 0; i < n; i++){
            p2 = p2.next;
        }

        // deleting nth node from end
        while(p2.next){
            p1 = p1.next;
            p2 = p2.next;
        }
        p1.next = p1.next.next;
        return head;
    }
}
