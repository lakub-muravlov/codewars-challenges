//https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
function sumIntervals(intervals) {
  let sumOfIntervals = 0;
  for (interval of intervals) {
    let length = interval[1] - interval[0];
    sumOfIntervals += length;
  }
  return sumOfIntervals;
}
var intervals = [
  [1, 2],
  [6, 10],
  [11, 15],
];
console.log(sumIntervals(intervals));
