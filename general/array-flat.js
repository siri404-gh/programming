const flat = arr => {
  const result = [];
  helper(arr, result);
  return result;
};

const helper = (arr, result) => {
  for (let i = 0; i < arr.length; i++) {
    // console.log(i);
    if (!arr[i]) return;
    if (typeof arr[i] === 'number') {
      result.push(arr[i]);
    } else {
      helper(arr[i], result);
    }
  }
};

const arr = [1, [[2], 3, 4, null], [5]];

console.log(flat(arr));