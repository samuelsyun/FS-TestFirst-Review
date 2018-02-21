function search(func) {
  let bool = false;

  this.forEach(function(ele) {
    if (func(ele)) {
      bool = true;
    } else if (Array.isArray(ele) && !bool) {
      bool = search.call(ele, func);
    }
  });

  return bool;
}



// function search(func) {
//   return this.reduce(function(preVal, currentVal) {
//     if (func(currentVal)) {
//       return true;
//     } else if (Array.isArray(currentVal)) {
//       if (!preVal) {
//         return search.call(currentVal, func);
//       }
//     }

//     return preVal;
//   }, false);
// }
