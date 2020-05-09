function insertNodeAtTail(head, data) {
    if (!head) {
        head = new SinglyLinkedListNode(data);
    } else {
        let pointer = head;
        while (pointer.next) {
            pointer = pointer.next;
        }
        pointer.next = new SinglyLinkedListNode(data);
    }
    return head;
}
