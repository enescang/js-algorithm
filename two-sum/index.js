const array = [1, 2, 3, 4, 6, 7, 8];

const twoSum = (arr, target) => {
  const elemenst = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      const sum = arr[i] + arr[k];
      if (sum === target && elemenst.length < 2) {
        elemenst.push(i);
        elemenst.push(k);
        break;
      }
    }
  }

  if (elemenst.length ==2) {
    return `Output: [${elemenst}]`;
  }
  return "404 :(";
};

console.log(twoSum(array, 13));
console.log(twoSum(array, 15));
console.log(twoSum(array, 10));
console.log(twoSum(array, 9));

