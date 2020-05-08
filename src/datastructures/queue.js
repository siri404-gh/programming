const Queue = class {
  constructor() {
    this.data = [];
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    this.data.shift();
  }

  front() {
    return this.data[0];
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  print() {
    console.log(this.data);
  }
};

const MyPriorityQueue = class {
  constructor() {
    this.data = [];
  }

  enqueue([item, priority]) {
    let added = false;
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i][1] < priority) this.data.splice(i, 0, [item, priority]);
      added = true;
    }
    if (!added) this.data.push([item, priority]);
  }

  print() {
    console.log(this.data);
  }

}

console.log("=====QUEUE=====");

const queue = new MyPriorityQueue();

queue.enqueue([1, 5]);
queue.enqueue([1, 6]);
queue.print();