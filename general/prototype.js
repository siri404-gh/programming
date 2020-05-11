Array.prototype.print = function() {
  console.log('this', this);
  // console.log('args', arguments);
};

log('PROTOTYPE');

const a = [1, 2];
const b = [3, 4];

a.print();
b.print.call(b);

b.print();
a.print.call(b);

// console.log(a.print.call(b));
// console.log(a.print.apply(b));