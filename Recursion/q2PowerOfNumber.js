function powerOfNumber(n, m) {
  let res;
  if (m === 0) return 1;
  res = n * powerOfNumber(n, Math.abs(m) - 1);
  if (m < 0) return 1 / res;
  else return res;
}

console.log(powerOfNumber(2, 4));
console.log(powerOfNumber(3, 3));
console.log(powerOfNumber(3, -2));
console.log(powerOfNumber(-3, 3));
