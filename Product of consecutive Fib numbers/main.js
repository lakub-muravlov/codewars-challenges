function productFib(prod) {
  let fibArr = [0, 1],
    result = [];
  let index = 1;
  while (fibArr[fibArr.length - 1] * fibArr[fibArr.length - 2] < prod) {
    fibArr.push(fibArr[index - 1] + fibArr[index]);
    index++;
  }
  result.push(fibArr[fibArr.length - 2], fibArr[fibArr.length - 1]);
  if (fibArr[fibArr.length - 1] * fibArr[fibArr.length - 2] == prod) {
    result.push(true);
  } else {
    result.push(false);
  }
  return result;
}

console.log(productFib(714));
