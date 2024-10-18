const mymap=new Map([
  ["key1",234],
  [23,"javascript"],
  ["key2","g"]
]);
console.log(mymap.get(23));
console.log(mymap.get("key1"));
mymap.set(9,"java");
console.log(mymap)
const myset=new Set();
myset.add(23);
myset.add(23);
myset.add(23);
console.log(myset);