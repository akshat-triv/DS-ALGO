const arr1 = [-2, -3, 4, -1, -2, 1, 5, -3];
const arr2 = [1, 2, 3, -2, 5];

function kadanesAlgorithm(inputArray){
    let maxSoFar = 0, maxRightNow = 0;

    for(const i of inputArray){
        maxRightNow += i;
        if(maxRightNow > maxSoFar) maxSoFar = maxRightNow;
        if(maxRightNow < 0) maxRightNow = 0;
    }

    return maxSoFar;
}

console.log(kadanesAlgorithm(arr1)); // 7
console.log(kadanesAlgorithm(arr2)); // 9