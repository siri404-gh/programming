String.prototype.isUnique = function() {
  return new Set(this).size === this.length;
}

log('STRING');

console.log('abcde'.isUnique());