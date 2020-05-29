const majorityElement = function (arr) {
  const size = arr.length;
  let temp = {};
  let majorityNum = {
    times: 0,
    num: 0,
  };
  arr.forEach((element, index) => {
    var check = temp[element.toString()];
    if (check === undefined) {
      temp[element] = 1;
    } else {
      temp[element] += 1;
    }
    /**
     * Get the most repeating number and
     * the value of repeating.
     */
    if (majorityNum.times <= temp[element]) {
      majorityNum.times = temp[element];
      majorityNum.num = element;
    }
  });

  if (majorityNum.times > size / 2) {
    console.log("This is the majority element: ", majorityNum.num);
  } else {
    console.log("No majority element");
  }
};

const arr = [1,2,1,1,1,7,1,9];
majorityElement(arr);
