function solution(string, markers) {
  let charArr = new Array();
  charArr = string.split("");
  let checkCommentstart = false;
  let resultArr = new Array();
  for (char of charArr) {
    for (marker of markers) {
      if (char.includes(marker)) checkCommentstart = true;
    }
    if (char == "\n" && checkCommentstart == true) {
      checkCommentstart = false;
    }
    if (char != "\n" && checkCommentstart == true) {
      char = "-1";
    }
    if (char != "-1") {
      resultArr.push(char);
    }
  }
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] == " " && resultArr[i + 1] == "\n") {
      resultArr.splice(i, 1);
    }
    if (resultArr[i] == " " && resultArr[i + 1] == undefined) {
      resultArr.splice(i, 1);
    }
  }
  let resultString = "";
  for (char of resultArr) {
    resultString = resultString.concat("", char);
  }
  return resultString;
}

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);
