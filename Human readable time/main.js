function humanReadable(seconds) {
  hours = Math.floor(seconds / 3600).toString();
  minutes = Math.floor((seconds / 60) % 60).toString();
  seconds = (seconds % 60).toString();
  let timeArr = [];
  timeArr.push(hours, minutes, seconds);
  for (let i = 0; i < 3; i++) {
    if (timeArr[i].length == 1) timeArr[i] = "0" + timeArr[i];
  }
  return `${timeArr[0]}:${timeArr[1]}:${timeArr[2]}`;
}
console.log(humanReadable(359999));
