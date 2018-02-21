function accessor(obj) {
  return function(key, val) {
    if (arguments.length === 1) {
      return obj[key];
    } else {
      obj[key] = val;
    }
  }
}
