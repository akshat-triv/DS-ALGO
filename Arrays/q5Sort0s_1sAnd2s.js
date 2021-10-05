// Solution that I came up with -> Somewhat similar to counting sort

function sort012(arr) {
  //your code here
  const count = {};
  const N = arr.length;
  for (const i of arr) {
    if (count[i]) count[i]++;
    else count[i] = 1;
  }
  for (let i = 0; i < N; i++) {
    if (count["0"]) {
      arr[i] = 0;
      count["0"]--;
    } else if (count["1"]) {
      arr[i] = 1;
      count["1"]--;
    } else if (count["2"]) {
      arr[i] = 2;
      count["2"]--;
    }
  }
  return arr;
}

// Solution given on GFG -> Three pointer approach
// Read more about it here -> https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

function segregating012(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid < high) {
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      mid++;
      low++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

console.log(sort012([0, 2, 1, 2, 0])); // [0, 0, 1, 2, 2]
console.log(sort012([0, 1, 0])); // [0, 0, 1]

console.log(segregating012([0, 2, 1, 2, 0])); // [0, 0, 1, 2, 2]
console.log(segregating012([0, 1, 0])); // [0, 0, 1]
