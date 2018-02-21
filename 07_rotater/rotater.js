function rotater(str) {
  let hitMax = false;

  return function(num) {
    if (num === str.length) {
      hitMax = !hitMax;
    }

    if (!hitMax) {
      return str.slice(num) + str.slice(0, num);
    } else {
      let newNum = str.length - num
      return str.slice(newNum) + str.slice(0, newNum);
    }
  }
}
