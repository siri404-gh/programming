const MyStack = class {
  constructor() {
    this.data = {};
    this.index = 0;
  }

  push(item) {
    this.data[this.index] = item;
    this.index++;
  }
  
  pop() {
    delete this.data[length - 1];
    this.index --;
  }

  peek() {
    return this.data[this.index - 1];
  }

  size() {
    return this.index;
  }

  print() {
    console.log(this.data);
  }
}

log('STACK')

const stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.push(4);
stack.print();
