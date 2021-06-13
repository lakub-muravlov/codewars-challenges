var countBits = function (number) {
  let bitArray = [];
  if (number == 0) {
    bitArray.unshift(0);
  } else {
    while (number >= 1) {
      bit = number % 2;
      number = Math.floor(number / 2);
      bitArray.unshift(bit);
    }
  }
  console.log(bitArray);
  let counter = 0;
  for (bit of bitArray) {
    if (bit === 1) counter++;
  }
  return counter;
};

countBits(25);
