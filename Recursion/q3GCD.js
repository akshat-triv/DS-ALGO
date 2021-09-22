function calcGCD(num1, num2) {
    if (num1 < num2) {
        const temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if (num1 < 0) num1 = num1 * -1;
    if (num2 < 0) num2 = num2 * -1;

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) throw 'Numbers should be integers';

    if (num2 === 0) return num1

    return calcGCD(num2, num1 % num2);
}


console.log(calcGCD(8, 12));
console.log(calcGCD(48, 18));