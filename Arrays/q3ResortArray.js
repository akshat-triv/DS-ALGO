"use strict";

function breakArray(inputArray) {
  const negativeIntegers = [];
  const positiveIntegers = [];
  for (const integer of inputArray) {
    if (integer >= 0) positiveIntegers.push(integer);
    else negativeIntegers.unshift(integer);
  }

  return { negativeIntegers, positiveIntegers };
}

function mergeArray(negativeIntegers, positiveIntegers) {
  const mergedArr = [];
  const negativeIntegersLength = negativeIntegers.length;
  const positiveIntegersLength = positiveIntegers.length;
  let pointer1 = 0;
  let pointer2 = 0;

  while (
    pointer1 < negativeIntegersLength &&
    pointer2 < positiveIntegersLength
  ) {
    if (Math.abs(negativeIntegers[pointer1]) <= positiveIntegers[pointer2]) {
      mergedArr.push(negativeIntegers[pointer1]);
      pointer1++;
    } else {
      mergedArr.push(positiveIntegers[pointer2]);
      pointer2++;
    }
  }

  while (pointer1 < negativeIntegersLength) {
    mergedArr.push(negativeIntegers[pointer1]);
    pointer1++;
  }

  while (pointer2 < positiveIntegersLength) {
    mergedArr.push(positiveIntegers[pointer2]);
    pointer2++;
  }

  return mergedArr;
}

function resortArray(inputArray) {
  const { negativeIntegers, positiveIntegers } = breakArray(inputArray);
  return mergeArray(negativeIntegers, positiveIntegers);
}

console.log(resortArray([-3, -1, 3, 6]));
console.log(resortArray([-8, -5, -3, -1, 3, 6, 9]));
