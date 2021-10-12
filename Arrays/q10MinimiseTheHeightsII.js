"use strict";

const arr1 = [1, 10, 5, 8];
const k1 = 2;

const arr2 = [3, 9, 12, 16, 20];
const k2 = 3;

function minimiseTheDifference(inputArray, k, n) {
  inputArray.sort((a, b) => a - b);
  let result = inputArray[n - 1] - inputArray[0];
  let currMax, currMin;
  const lowest = inputArray[0] + k;
  const greatest = inputArray[n - 1] - k;

  for (let i = 1; i < n; i++) {
    if (inputArray[i] >= k) {
      currMax = Math.max(greatest, inputArray[i - 1] + k);
      currMin = Math.min(lowest, inputArray[i] - k);

      result = Math.min(result, currMax - currMin);
    } else continue;
  }

  return result;
}

console.log(minimiseTheDifference(arr1, k1, arr1.length));
console.log(minimiseTheDifference(arr2, k2, arr2.length));
