function moveZeros(arr) {
  let countZeros = 0;
  let result = [];
  for (elem of arr) {
    if (elem !== 0) {
      result.push(elem);
    } else {
      countZeros++;
    }
  }
  while (countZeros != 0) {
    countZeros--;
    result.push(0);
  }
  return result;
}

var arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
console.log(moveZeros(arr));
