function isRotation(str1, str2) {
  const str1Double = `${str1}${str1}`;

  for (let i = 0; i < str1Double.length; i++) {
    if (str1Double.slice(i, i + str1.length) === str2) return true;
  }

  return false;
}

const str1 = "AAAAAAAABBBBBBBCCCCCCDDDDDD";
const str2 = "DDDDDDAAAAAAAABBBBBBBCCCCC";

console.log(isRotation(str1, str2));
