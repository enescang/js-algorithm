/**
 * Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 * 
 * Find the longest palindromic substring in given string.
 */
const palindromicString = function (str) {
  let arr = Array.from(str);
  let each = [];
  let result = {
    lengthStr: function () {
      return this.str.length;
    },
    str: "",
  };
  for (let start = 0; start < 5; start++) {
    for (let i = 0; i < arr.length; i++) {
      each = [];
      for (let k = 0; k <= i; k++) {
        each.push(arr[k]);
      }
      if (each.length > 1) {
        if (each.toString() === each.reverse().toString()) {
          if (result.lengthStr() <= each.toString().length) {
            result.str = each.toString();
          }
        }
      }
    }
    //remove the first element
    arr.shift();
  }
  //replace all comma
  result.str = result.str.replace(/,/g,"");
  return `The String: ${result.str} and the length ${result.lengthStr()}`;
};

console.log(palindromicString("babad"));
console.log(palindromicString("pabcdcbte"));
console.log(palindromicString("bb"));
console.log(palindromicString(""));
console.log(palindromicString("bbb"));
console.log(palindromicString("bbbb"));
console.log(palindromicString("ptabbbbat"));