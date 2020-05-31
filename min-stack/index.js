/**
 * Min Stack
 * More detail:
 * https://leetcode.com/problems/min-stack/description/
 */

const MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function (num) {
  if (this.minStack.length > 0) {
    if (num <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(num);
    }
  } else {
    this.minStack.push(num);
  }
  this.stack.push(num);
};

MinStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    var last = this.stack.pop();
    if (last == this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  } else {
    console.log("There is no element to pop()");
  }
};

MinStack.prototype.getMin = function () {
  if (this.minStack.length <= 0) {
    return null;
  }
  return this.minStack[this.minStack.length - 1];
};

MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  } else {
    return null;
  }
};

var stack = new MinStack();

stack.push(10);
stack.push(30);
stack.push(1);
stack.push(290);
stack.pop();
stack.push(-6);
stack.pop();
stack.push(700);
console.log(stack.getMin());
console.log(stack.top());
