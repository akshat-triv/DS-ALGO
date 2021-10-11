const arr11 = [1, 3, 4, 5, 7];
const arr12 = [2, 3, 5, 6];

const arr21 = [2, 5, 6];
const arr22 = [4, 6, 8, 10];

function findUnionIntersection(inputArray1, inputArray2) {
    const union = [];
    const intersection = [];
    const n = inputArray1.length;
    const m = inputArray2.length;

    let i = 0, j = 0;

    while (i < n && j < m) {
        if (inputArray1[i] < inputArray2[j]) {
            union.push(inputArray1[i]);
            i++;
        } else if (inputArray1[i] === inputArray2[j]) {
            union.push(inputArray1[i]);
            intersection.push(inputArray1[i]);
            i++;
            j++;
        } else if (inputArray1[i] > inputArray2[j]) {
            union.push(inputArray2[j]);
            j++;
        }
    }

    while (i < n) {
        union.push(inputArray1[i]);
        i++;
    }

    while (j < m) {
        union.push(inputArray2[j]);
        j++;
    }

    return { union, intersection };
}

console.log(findUnionIntersection(arr11, arr12)); // {union: [1, 2, 3, 4, 5, 6, 7], intersection: [3, 5]}
console.log(findUnionIntersection(arr21, arr22)); // {union: [2, 4, 5, 6, 8, 10], intersection: [6]}

