function printLinkedList(head) {
    let pointer = head;
    while(pointer) {
        console.log(pointer.data);
        pointer = pointer.next;
    }
}