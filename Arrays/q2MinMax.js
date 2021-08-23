// My answer - using linear search

function minmax(inputArr) {
  const ansObj = { min: null, max: null };

  for (let each of inputArr) {
    if (!ansObj.min && !ansObj.max) ansObj.min = ansObj.max = each;

    if (each < ansObj.min) ansObj.min = each;
    if (each > ansObj.max) ansObj.max = each;
  }

  return ansObj;
}

// console.log(minmax([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(minmax([34, 25, 111, 421, 619, 502, 166, 15, 420]));

// Geeks for Geeks - Recursive solution

function minmaxRecursion(low, high, inputArr) {
  // If there is only one element in the array
  if (low === high) return { min: inputArr[low], max: inputArr[low] };
  // If there are 2 elements in the array
  if (low + 1 === high) {
    if (inputArr[low] > inputArr[high])
      return { min: inputArr[high], max: inputArr[low] };
    else return { min: inputArr[low], max: inputArr[high] };
  }

  // If there are more than 2 elements

  mid = parseInt((low + high) / 2);
  const { min: arr1Min, max: arr1Max } = minmaxRecursion(low, mid, inputArr);
  const { min: arr2Min, max: arr2Max } = minmaxRecursion(
    mid + 1,
    high,
    inputArr
  );

  return { min: Math.min(arr1Min, arr2Min), max: Math.max(arr1Max, arr2Max) };
}

console.log(minmaxRecursion(0, 8, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(minmaxRecursion(0, 8, [34, 25, 111, 421, 619, 502, 166, 15, 420]));
