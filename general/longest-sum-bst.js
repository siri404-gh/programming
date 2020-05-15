const longestSum = root => {
  const sum = node => {
    if (!node) return;
    if (node.left) sum(node.left);
    if (node.right) sum(node.right);
    if (node.right && node.left) {
      node.val += node.right.val > node.left.val ? node.right.val : node.left.val;
    } else if (node.right) {
      node.val += node.right.val; 
    } else if (node.left) {
      node.val += node.left.val;
    }

  };
  sum(root);
  return root;
};