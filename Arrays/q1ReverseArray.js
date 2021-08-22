// My answer--> Using JavaScript inbuilt methods

function reverse(input) {
  if (typeof input === "string") {
    return input.split("").reverse().join("");
  } else if (Array.isArray(input)) {
    return input.reverse();
  }
}

// console.log(reverse([1, 2, 4, 5, 6])); --> [6, 5, 4, 2, 1]
// console.log(reverse("Akshat Trivedi")); --> idevirT tahskA

// Using iterative approach

function reverseIterative(input) {
  const inputlength = input.length;
  const reversedInput = [];
  for (let char = inputlength - 1; char >= 0; char--) {
    reversedInput.push(input[char]);
  }
  if (typeof input === "string") {
    return reversedInput.join("");
  }
  return reversedInput;
}

// console.log(reverse([1, 2, 4, 5, 6])); --> [6, 5, 4, 2, 1]
// console.log(reverse("Akshat Trivedi")); --> idevirT tahskA

// Using recursive approach (from geeks for geeks)

function reverseRecursive(input, start, end) {
  if (start >= end) return input;

  let temp = input[start];
  input[start] = input[end];
  input[end] = temp;

  reverseRecursive(input, start + 1, end - 1);
}

const value = [1, 2, 3, 4, 5];
reverseRecursive(value, 0, value.length - 1);
// console.log(value);

// This code will not work for strings but only in javascript, as in javascript strings are immutable
