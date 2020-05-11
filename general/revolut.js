//Closures

var x = function() {
  return a; 
  var a = 1; 
  // function a() { return 'hello'} 
}

console.log(x())

//Closure
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    // console.log(i + i + '' + i)
  }, i*10)
}

// *
var a={},
    b={ key:'b' },
    c={ key:'c' };

a[b]=123;
a[c]=456;

// console.log(a);
// console.log(a[c]);

// Context
var myName = '1';
var myObject = {
    getName: function (){
        var myName = '2'
        return this.myName;
    },
    myName: '3',
};

var getNameFunc = myObject.getName;

// console.log(getNameFunc());
// console.log(myObject.getName());


// This

var length = 10;

function fn() {
	console.log(this.length);
}

// fn();

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    // arguments[0]();
  }
};

obj.method(fn, 1);

// Task: write fbind function

Function.prototype.fbind = function(context, arg1) {
  const c = this;
  return function(arg2) {
    return c(arg1, arg2);
  }
}

let plus = function(x,y) { return x + y; } 

let plus2 = plus.bind(null, 2);
console.log(plus2(5));

let plus4 = plus.fbind(null, 4);
console.log(plus4(4));
