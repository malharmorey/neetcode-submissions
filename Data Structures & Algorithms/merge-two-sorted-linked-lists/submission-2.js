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
        let sentinel = new ListNode();
        let prev = sentinel;

        while(list1 && list2){
            if(list1.val < list2.val){ // compare value not node
                prev.next = list1;
                prev = prev.next;
                list1 = list1.next;
            } else {
                prev.next = list2;
                prev = prev.next;
                list2 = list2.next;
            }
        }

        prev.next = list1 || list2;
        return sentinel.next;
    }
}
