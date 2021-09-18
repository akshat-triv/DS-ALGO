function sumOfDigits(num) {
  if (num < 0 || isNaN(num) || parseInt(num) !== num)
    return "Enter a valid positive integer";

  if (num === 0) return 0;

  return (num % 10) + sumOfDigits(parseInt(num / 10));
}

console.log(sumOfDigits(435));
console.log(sumOfDigits(99));
