/**
 * Maximum Subarray
 *  https://leetcode.com/problems/maximum-subarray
 */
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let temp = 0;
let max = 0;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  temp = temp + element;
  if (temp < 0) {
    temp = 0;
  }

  if (temp > max) {
    max = temp;
  }
}

console.log(max);
