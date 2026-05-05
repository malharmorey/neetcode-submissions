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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let sentinel = new ListNode();
        let curr = sentinel;
        let carry = 0;

        while (l1 || l2 || carry) {
            // calc the sum
            let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
            let lastDigit = sum % 10;
            carry = Math.floor(sum / 10);

            // append new node
            let newNode = new ListNode();
            newNode.val = lastDigit;
            curr.next = newNode;

            // advance all pointers
            curr = curr.next;
            l1 = l1 && l1.next;
            l2 = l2 && l2.next;
        }
        return sentinel.next;
    }
}
