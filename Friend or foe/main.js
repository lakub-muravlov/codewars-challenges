function friend(friends) {
  let hashMap = new Map();
  let resultArray = [];
  for (let man of friends) {
    if (!hashMap.has(man)) {
      hashMap.set(man, man.length);
    }
  }
  for (let [key, value] of hashMap) {
    if (value == 4) resultArray.push(key);
  }
  return resultArray;
}

friends = ["Ryan", "Kieran", "Mark"];
console.log(friend(friends));
