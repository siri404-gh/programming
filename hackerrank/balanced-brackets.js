function isBalanced(s) {
  const complementary = {
    "}": "{",
    "]": "[",
    ")": "("
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (complementary[s[i]] && stack[stack.length - 1] === complementary[s[i]])
      stack.pop();
    else stack.push(s[i]);
  }
  return stack.length === 0 ? "YES" : "NO";
}
