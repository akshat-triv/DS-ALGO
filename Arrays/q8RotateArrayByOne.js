const arr1 = [1, 2, 3, 4, 5];
const arr2 = [9, 8, 7, 6, 4, 2, 1, 3];

function cyclicRotateByOne(inputArray) {
    const last = inputArray.pop();
    inputArray.unshift(last);
    return inputArray
}

console.log(cyclicRotateByOne(arr1));
console.log(cyclicRotateByOne(arr2));