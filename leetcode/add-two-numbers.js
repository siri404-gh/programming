/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
  let temp = 0;
  let carry = 0;
  let digit = 0;
  let sum;

  const addToSum = num => {
    if (!sum) sum = new ListNode(num);
    else {
      let pointer = sum;
      while(pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = new ListNode(num);
    }
  };

  while (l1 || l2) {
    temp = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(temp/10);
    digit = temp % 10;
    addToSum(digit);
     
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
    if (carry) addToSum(carry);
    return sum;
};