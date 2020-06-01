/**
 * Number of Segments in a String
 * https://leetcode.com/problems/number-of-segments-in-a-string/description/
 * @param {string} string
 * @return {number} count
 */

//With O(n) solution
const countSegments = function (string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    const prev = string[i - 1];
    const next = string[i + 1];
    if (element != " ") {
      //if next == undefined it means we reach the end of the string
      if (next == " " || next == undefined) {
        count++;
      }
    }
  }
  if (count === 0) return 0;
  return count;
};

const countSegments2 = function (str) {
  let arr = Array.from(str.split(" "));
  return arr.filter((x) => x != " " && x != "").length;
};
console.log(countSegments(" "));
console.log(countSegments("z   o abc   sty "));
console.log(countSegments("ab cd ef"));
console.log(countSegments("  ab cd ef"));
console.log(countSegments("ab cd ef  i "));
console.log(countSegments("x  c    t  c p      op p pi ş"));
console.log("Other Solution")
console.log(countSegments2(" "));
console.log(countSegments2("z   o abc   sty "));
console.log(countSegments2("ab cd ef"));
console.log(countSegments2("  ab cd ef"));
console.log(countSegments2("ab cd ef  i "));
console.log(countSegments2("x  c    t  c p      op p pi ş"));
