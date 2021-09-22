function decimalToBinary(num) {
    if (!Number.isInteger(num)) throw 'Number should be an integer';

    if (num === 0) return 0;

    return num % 2 + 10 * decimalToBinary(Math.floor(num / 2));
}


console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(13)); // 1101