const Node = class {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
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
    } else {
      const searchTree = node => {
        if (data < node.data) {
          if (!node.left) node.left = new Node(data);
          else return searchTree(node.left);
        }
        if (data > node.data) {
          if (!node.right) node.right = new Node(data);
          else return searchTree(node.right);
        }
      };
      searchTree(this.root);
    }
  }

  findMin() {
    if (!this.root) return null;
    let pointer = this.root;
    while(pointer.left) {
      pointer = pointer.left;
    }
    return pointer.data;
  }

  findMax() {
    if (!this.root) return null;
    let pointer = this.root;
    while(pointer.right) {
      pointer = pointer.right;
    }
    return pointer.data;
  }

  isPresent(data) {
    const searchTree = node => {
      if (!node) return false;
      if (node.data === data) return true;
      if (data < node.data) return searchTree(node.left);
      if (data > node.data) return searchTree(node.right);
      return false;
    };
    return searchTree(this.root);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return;
      if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) return node.right;
        else if (!node.right) return node.left;
        else {
          const tempNode = node.right;
          while (tempNode.left) {
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        }

      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }

  inOrder() { // left-root-right
    if (!this.root) return null;
    let values = [];
    let i = 0;
    const traverse = node => {
      i++;
      node.left && traverse(node.left);
      values.push(node.data);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return values;
  }

  preOrder() { // root-left-right
    if (!this.root) return null;
    let values = [];
    const traverse = node => {
      values.push(node.data);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return values;
  }

  postOrder() { // left-right-root
    if (!this.root) return null;
    let values = [];
    const traverse = node => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      values.push(node.data);
    }
    traverse(this.root);
    return values;
  }

  levelOrder() {
    if (!this.root) return null;
    let result = [];
    let q = [];

    q.push(this.root);
    while(q.length > 0) {
      let node = q.shift();
      result.push(node.data);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    return result;
  }

  longestSum() {
  const sum = node => {
    if (!node) return;
    if (node.left) sum(node.left);
    if (node.right) sum(node.right);
    if (node.right && node.left) {
      node.data += node.right.data > node.left.data ? node.right.data : node.left.data;
    } else if (node.right) {
      node.data += node.right.data; 
    } else if (node.left) {
      node.data += node.left.data;
    }

  };
  sum(this.root);
  return this.root.data;
}

  print() {
    // console.log('inOrder', this.inOrder());
    // console.log('preOrder', this.preOrder());
    // console.log('postOrder', this.postOrder());
    console.log('levelOrder', this.levelOrder());
  }
};

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
bst.add(10);
// bst.print();
// console.log(bst.isPresent(9));
// bst.remove(9);
bst.print();
console.log(bst.longestSum());