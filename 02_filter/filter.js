function filter(arr, func) {
  let resultArr = [];

  arr.forEach((ele) => {
    if (func(ele)) {
      resultArr.push(ele);
    }
  });

  return resultArr;
}
