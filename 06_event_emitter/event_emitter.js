function MyEventEmitter() {
  this.events = {};
}

MyEventEmitter.prototype.addListener = function(eventName, cb) {
  if (!this.events[eventName]) {
    this.events[eventName] = [cb];
  } else {
    this.events[eventName].push(cb);
  }
}

MyEventEmitter.prototype.emit = function(eventName, name) {
  let args = Array.prototype.slice.call(arguments, 1);

  this.events[eventName].forEach(function(cb) {
    cb.apply(null, args);
  })
}

