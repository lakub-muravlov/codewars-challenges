function rgb(r, g, b) {
  let colorArray = [r, g, b];
  let hexString = "";
  for (color of colorArray) {
    if (color <= 0) hexString += "00";
    else if (color >= 255) hexString += "FF";
    else {
      hexString += decToHex(color);
    }
  }
  return hexString;
}

function decToHex(number) {
  return (number + 0x10000).toString(16).substr(-2).toUpperCase();
}

console.log(rgb(173, 255, 15));
