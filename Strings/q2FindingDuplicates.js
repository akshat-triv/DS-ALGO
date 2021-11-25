function findingDuplicates(str) {
  const myDict = {};
  const duplicates = [];

  for (let i = 0; i < str.length; i++) {
    if (myDict[str[i]]) myDict[str[i]] += 1;
    else myDict[str[i]] = 1;
  }

  const keys = Object.keys(myDict);

  for (i of keys) {
    const temp = {};
    temp[i] = myDict[i];
    if (myDict[i] > 1) duplicates.push(temp);
  }

  return duplicates;
}

console.log(findingDuplicates("geeksforgeeks"));
