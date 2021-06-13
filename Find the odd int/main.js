function findOdd(array) {
  let hashMap = new Map();
  for (let number of array) {
    if (hashMap.has(number)) {
      let occurences = hashMap.get(number);
      hashMap.set(number, occurences + 1);
    } else {
      hashMap.set(number, 1);
    }
  }
  for (let [key, value] of hashMap) {
    if (value % 2 === 1) return key;
  }
}

array = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
console.log(findOdd(array));
