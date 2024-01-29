var rangeSumBST = function (root, low, high) {
  let sum = 0;
  root.forEach((number) => {
    if (number >= low && number <= high) {
      sum += number;
    }
  });
  return sum;
};

console.log(rangeSumBST([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10));
