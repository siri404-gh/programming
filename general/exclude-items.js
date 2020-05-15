const items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20}
];

const excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'},
];

function excludeItems(items, excludes) {
   excludes.forEach((pair, i) => {
      items = items.filter((item, j) => {
        return item[pair.k] !== pair.v;
      });
   });
   return items;
};

log('Exclude');

console.log(excludeItems(items, excludes));
