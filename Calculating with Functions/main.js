//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
function zero(arg) {
  let number = 0;
  if (!arg) {
    return "" + number;
  } else {
    if (arg[0] == "*") return number * parseInt(arg[1]);
    if (arg[0] == "+") return number + parseInt(arg[1]);
    if (arg[0] == "-") return number - parseInt(arg[1]);
    if (arg[0] == "/") return Math.floor(number / parseInt(arg[1]));
  }
}
function one(arg) {
  let number = 1;
  if (!arg) {
    return "" + number;
  } else {
    if (arg[0] == "*") return number * parseInt(arg[1]);
    if (arg[0] == "+") return number + parseInt(arg[1]);
    if (arg[0] == "-") return number - parseInt(arg[1]);
    if (arg[0] == "/") return Math.floor(number / parseInt(arg[1]));
  }
}
function two(arg) {
  let number = 2;
  if (!arg) {
    return "" + number;
  } else {
    if (arg[0] == "*") return number * parseInt(arg[1]);
    if (arg[0] == "+") return number + parseInt(arg[1]);
    if (arg[0] == "-") return number - parseInt(arg[1]);
    if (arg[0] == "/") return Math.floor(number / parseInt(arg[1]));
  }
}
function three(arg) {
  let number = 3;
  if (!arg) {
    return "" + number;
  } else {
    if (arg[0] == "*") return number * parseInt(arg[1]);
    if (arg[0] == "+") return number + parseInt(arg[1]);
    if (arg[0] == "-") return number - parseInt(arg[1]);
    if (arg[0] == "/") return Math.floor(number / parseInt(arg[1]));
  }
}
function four(arg) {
  let number = 4;
  if (!arg) {
    return "" + number;
  } else {
    if (arg[0] == "*") return number * parseInt(arg[1]);
    if (arg[0] == "+") return number + parseInt(arg[1]);
    if (arg[0] == "-") return number - parseInt(arg[1]);
    if (arg[0] == "/") return Math.floor(number / parseInt(arg[1]));
  }
}
function five(arg) {
  let number = 5;
  if (!arg) {
    return "" + number;
  } else {
    if (arg[0] == "*") return number * parseInt(arg[1]);
    if (arg[0] == "+") return number + parseInt(arg[1]);
    if (arg[0] == "-") return number - parseInt(arg[1]);
    if (arg[0] == "/") return Math.floor(number / parseInt(arg[1]));
  }
}
function six(arg) {
  let number = 6;
  if (!arg) {
    return "" + number;
  } else {
    if (arg[0] == "*") return number * parseInt(arg[1]);
    if (arg[0] == "+") return number + parseInt(arg[1]);
    if (arg[0] == "-") return number - parseInt(arg[1]);
    if (arg[0] == "/") return Math.floor(number / parseInt(arg[1]));
  }
}
function seven(arg) {
  let number = 7;
  if (!arg) {
    return "" + number;
  } else {
    if (arg[0] == "*") return number * parseInt(arg[1]);
    if (arg[0] == "+") return number + parseInt(arg[1]);
    if (arg[0] == "-") return number - parseInt(arg[1]);
    if (arg[0] == "/") return Math.floor(number / parseInt(arg[1]));
  }
}
function eight(arg) {
  let number = 8;
  if (!arg) {
    return "" + number;
  } else {
    if (arg[0] == "*") return number * parseInt(arg[1]);
    if (arg[0] == "+") return number + parseInt(arg[1]);
    if (arg[0] == "-") return number - parseInt(arg[1]);
    if (arg[0] == "/") return Math.floor(number / parseInt(arg[1]));
  }
}
function nine(arg) {
  let number = 9;
  if (!arg) {
    return "" + number;
  } else {
    if (arg[0] == "*") return number * parseInt(arg[1]);
    if (arg[0] == "+") return number + parseInt(arg[1]);
    if (arg[0] == "-") return number - parseInt(arg[1]);
    if (arg[0] == "/") return Math.floor(number / parseInt(arg[1]));
  }
}

function plus(arg) {
  return `+${arg}`;
}
function minus(arg) {
  return `-${arg}`;
}
function times(arg) {
  return `*${arg}`;
}
function dividedBy(arg) {
  return `/${arg}`;
}
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
