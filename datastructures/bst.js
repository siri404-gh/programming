const Node = class {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
};

const BST = class {
  constructor() {
    this.root = null;
  }

  add(data) {
    if (!this.root) {
      this.root = new Node(data);
      return;
    }
    else {
      const searchTree = pointer => {
        if(data < pointer.data) {
          if (!pointer.left) pointer.left = new Node(data);
          else return searchTree(pointer.left);
        } else if (data > pointer.data) {
          if(!pointer.right) pointer.right = new Node(data);
          else return searchTree(pointer.right);
        }
        return;
      }
      return searchTree(this.root);
    }
  }

  findMin() {
    if (!this.root) return null;
    let pointer = this.root;
    while(pointer.left) {
      pointer = pointer.left;
    }
    return pointer;
  }

  findMax() {
    if (!this.root) return null;
    let pointer = this.root;
    while(pointer.right) {
      pointer = pointer.right;
    }
    return pointer;
  }

  isPresent(data) {
    const searchTree = pointer => {
      if (!pointer) return false;
      if (data < pointer.data) return searchTree(pointer.left);
      if (data > pointer.data) return searchTree(pointer.right);
      return true;
    }
    return searchTree(this.root);
  }

  remove(data) {
  }

  findMinHeight() {}

  findMaxHeight() {}

  isBalanced() {}

  inOrder() {}

  preOrder() {}

  postOrder() {}

  levelOrder() {}

  print() {
    console.log(this.root);
  }
};

log ('Binary Search Tree');

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.print();
console.log(bst.findMin());
console.log(bst.findMax());
console.log(bst.isPresent(2));