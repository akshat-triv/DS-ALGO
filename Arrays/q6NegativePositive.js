const arr1 = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
const arr2 = [-1, 2, -3, 4, 5, 6, -7, 8, 9];

function myRearrange(inputArray) {
    let low = 0
    let high = inputArray.length - 1
    let i = 0
    while (low < high) {
        if (inputArray[i] < 0) {
            [inputArray[i], inputArray[low]] = [inputArray[low], inputArray[i]];
            i += 1;
            low += 1;
        }
        else {
            [inputArray[i], inputArray[high]] = [inputArray[high], inputArray[i]];
            high -= 1
        }
    }
    return inputArray
}

function gfgRearrange(inputArray){
    let low = 0
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] < 0) {
            [inputArray[i], inputArray[low]] = [inputArray[low], inputArray[i]];
            low++;
        }
    }

    return inputArray
}

console.log(myRearrange(arr1)); // [ -12, -6, -13, -5, -3, -7, 5, 6, 11 ]
console.log(myRearrange(arr2)); // [ -1, -7, -3, 5, 6, 4, 8, 9, 2 ]

console.log(gfgRearrange(arr1)); // [ -12, -6, -13, -5, -3, -7, 5, 6, 11 ]
console.log(gfgRearrange(arr2)); // [ -1, -7, -3, 5, 6, 4, 8, 9, 2 ]