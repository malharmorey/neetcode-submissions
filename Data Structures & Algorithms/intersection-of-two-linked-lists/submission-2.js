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
        // calc length of both LL
        let n1 = 0;
        let n2 = 0;
        let temp1 = headA;
        let temp2 = headB;
        while (temp1) {
            n1++;
            temp1 = temp1.next;
        }
        while (temp2) {
            n2++;
            temp2 = temp2.next;
        }

        // align both pointers vertically
        temp1 = headA;
        temp2 = headB;
        if (n1 < n2) {
            let d = n2 - n1;
            while (d) {
                --d;
                temp2 = temp2.next;
            }
        } else if (n1 > n2) {
            let d = n1 - n2;
            while (d) {
                --d;
                temp1 = temp1.next;
            }
        }

        // find intersection node
        while (temp1 && temp2) {
            if (temp1 == temp2) {
                return temp1;
            }
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
        return null;
    }
}
