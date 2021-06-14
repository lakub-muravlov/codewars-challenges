//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
var maxSequence = function (arr) {
  bestSum = 0;
  currentSum = 0;
  for (number of arr) {
    currentSum = Math.max(0, currentSum + number);
    bestSum = Math.max(bestSum, currentSum);
  }
  return bestSum;
};

var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//var array = [1, 2, 3];
console.log(maxSequence(array));
