/**
 * https://leetcode.com/problems/valid-parentheses/
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *   An input string is valid if:
 *  Open brackets must be closed by the same type of brackets.
 *  Open brackets must be closed in the correct order.
 *
 *  Note that an empty string is also considered valid.
 */

const isValid = function (string) {
  var stack = [];
  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    if (char == "{" || char == "(" || char == "[") {
      stack.push(char);
    }
    if (char == "}" || char == ")" || char == "]") {
      var lastElement = stack[stack.length - 1];
      if (
        (char == "}" && lastElement == "{") ||
        (char == ")" && lastElement == "(") ||
        (char == "]" && lastElement == "[")
      ) {
        stack.pop();
        continue;
      }
      stack.unshift(char);
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};
console.log(isValid(""));//true
console.log(isValid("()"));//true
console.log(isValid("([)]"));//false
console.log(isValid("{[()]}{[()]}"));//true
console.log(isValid("{[())()]}"));//false
