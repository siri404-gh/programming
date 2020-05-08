String.prototype.isUnique = function() {
  return new Set(this).size === this.length;
}

console.log("=====STRING=====");

console.log('abcde'.isUnique());