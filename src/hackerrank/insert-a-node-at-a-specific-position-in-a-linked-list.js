function insertNodeAtPosition(head, data, position) {
    if (!head) head = new SinglyLinkedListNode(data);
    else {
        let i = 0;
        let pointer = head;
        let prevPointer;
        while (pointer) {
            if (i === position) {
                let newNode = new SinglyLinkedListNode(data);
                newNode.next = pointer;
                prevPointer.next = newNode;
            }
            prevPointer = pointer;
            pointer = pointer.next;
            i++;
        }
    }
    return head;
}