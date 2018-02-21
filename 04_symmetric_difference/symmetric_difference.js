function difference(arr1, arr2) {
  return arr1.filter(ele => arr2.indexOf(ele) === -1);
}

function symmetricDiff(arr1, arr2) {
  return difference(arr1, arr2).concat(difference(arr2, arr1));
}
