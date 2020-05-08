String.prototype.isUnique = function() {
  return new Set(this).size === this.length;
}

console.log('=====String====')

console.log('abcde'.isUnique());