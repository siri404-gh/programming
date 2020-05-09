const MySet = class {
  constructor() {
    this.data = [];
  }

  has(item) {
    return this.data.includes(item);
  }

  add(item) {
    if (!this.has(item)) this.data.push(item);
  }

  remove(item) {
    if (this.has(item)) this.data.splice(this.index(item), 1);
  }

  index(item) {
    return this.data.indexOf(item);
  }

  values() {
    return this.data;
  }

  size() {
    return this.data.length;
  }

  union(set) {
    const resultSet = new MySet();
    this.values().forEach(value => resultSet.add(value));
    set.values().forEach(value => resultSet.add(value));
    return resultSet;
  }

  intersection(set) {
    const resultSet = new MySet();
    this.values().forEach(value => {
      set.has(value) && resultSet.add(value)
    });
    return resultSet;
  }

  difference(set) {
    const resultSet = new MySet();
    this.values().forEach(value => {
      !set.has(value) && resultSet.add(value)
    });
    set.values().forEach(value => {
      !this.has(value) && resultSet.add(value)
    });
    return resultSet;
  }

  subset(set) {
    return this.values().every(value => set.has(value));
  }
}

log('SET');

const mySet = new MySet();
const myOtherSet = new MySet();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(5);
mySet.add(1);
mySet.remove(3);

myOtherSet.add(1);
myOtherSet.add(2);
myOtherSet.add(3);
myOtherSet.add(4);
myOtherSet.add(1);
myOtherSet.remove(3);

console.log('Set 1', mySet.values());
console.log('Set 2', myOtherSet.values());
console.log('Union', mySet.union(myOtherSet).values());
console.log('Intersection', mySet.intersection(myOtherSet).values());
console.log('Difference', mySet.difference(myOtherSet).values());
console.log('Subset', mySet.subset(myOtherSet));
