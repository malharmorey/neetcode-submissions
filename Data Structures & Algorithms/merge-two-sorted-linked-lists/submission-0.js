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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1 && !list2) return list1;
        if (!list1 || !list2) return list1 ? list1 : list2;

        let p1 = list1;
        let p2 = list2;

        let newHead = new ListNode()
        let curr = newHead;
        while (p1 && p2) {
            if (p1.val < p2.val) {
                let newNode = new ListNode();
                newNode.val = p1.val;
                if(newHead.val == 0){
                    newHead.val = newNode.val
                } else{
                    curr.next = newNode;
                    curr = curr.next;
                }
                p1 = p1.next;
            } else{
                let newNode = new ListNode();
                newNode.val = p2.val;
                if(newHead.val == 0){
                    newHead.val = newNode.val
                } else{
                    curr.next = newNode;
                    curr = curr.next
                }
                p2 = p2.next;
            }
        }
        p1 ? curr.next = p1 : curr.next = p2;
        return newHead;
    }
}
