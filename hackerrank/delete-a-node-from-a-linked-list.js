function deleteNode(head, position) {
    if (!head) return;
    let pointer = head;
    let prevPointer;
    let i = 0;
    if (position === 0) {
        head = pointer.next;
    } else {
        while (pointer) {
            if (i === position) {
                prevPointer.next = pointer.next;
            }
            prevPointer = pointer;
            pointer = pointer.next;
            i++;
        }
    }
    return head;
}