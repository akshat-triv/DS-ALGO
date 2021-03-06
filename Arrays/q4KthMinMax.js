// 1 solution is you sort the array first, then you'll be able to tell the kth minimum and maximum element of the array with ease

function merge(inputArray, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  const leftArr = [];
  const rightArr = [];

  let i = (j = 0),
    k = left;

  for (i = 0; i < n1; i++) leftArr[i] = inputArray[left + i];

  for (j = 0; j < n2; j++) rightArr[j] = inputArray[mid + j + 1];

  i = j = 0;

  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      inputArray[k] = leftArr[i];
      i++;
    } else {
      inputArray[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    inputArray[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < n2) {
    inputArray[k] = rightArr[j];
    j++;
    k++;
  }
}

function mergeSort(inputArray, start, end) {
  if (start < end) {
    const mid = Math.floor((start + (end - 1)) / 2);
    mergeSort(inputArray, start, mid);
    mergeSort(inputArray, mid + 1, end);
    merge(inputArray, start, mid, end);
  }
  return inputArray;
}

// If elements in the array are not distinct
function removeDuplication(inputArray) {
  const mySet = new Set();
  const updatedArray = [];
  for (const num of inputArray) {
    if (mySet.has(num)) continue;
    updatedArray.push(num);
    mySet.add(num);
  }
  return updatedArray;
}

function kthMaxMin(inputArray, type, n) {
  inputArray = mergeSort(inputArray, 0, inputArray.length - 1);
  // If elements in an array are not distinct
  // inputArray = removeDuplication(inputArray);
  let idx;
  if (type === "max") idx = inputArray.length - n;
  else if (type === "min") idx = n - 1;

  return inputArray[idx];
}

const myArr = [7, 10, 4, 3, 20, 15];
const kMax = 1; // Tell me 4th maximum
const kMin = 3; // Tell me 5th minimum

// const sortedArr = mergeSort(myArr, 0, myArr.length - 1);
// // sortedArr =  [1, 2, 2, 5, 6, 8, 9, 14, 21];
// const sortedUniqArr = removeDuplication(sortedArr);
// // sortedUniqArr = [1, 2, 5, 6, 8, 9, 14, 21];

// console.log({ sortedArr, sortedUniqArr });

console.log(kthMaxMin(myArr, "max", kMax)); // 20
console.log(kthMaxMin(myArr, "min", kMin)); // 7
