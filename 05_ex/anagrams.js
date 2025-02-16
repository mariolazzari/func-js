function countOccurrences(arr) {
  return arr.reduce((prev, cur) => {
    if (!prev[cur]) {
      return { ...prev, [cur]: 1 };
    }

    return { ...prev, [cur]: prev[cur] + 1 };
  }, {});
}

function areAnagrams(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const count1 = countOccurrences(word1.split());
  const count2 = countOccurrences(word2.split());

  const keys1 = Object.keys(count1); //.sort();
  // const keys2 = Object.keys(count2).sort();

  //   for (let i; i < keys1.length; i++) {
  //     if (keys1[i] !== keys2[i]) {
  //       return false;
  //     }
  //   }
  //  return true;

  return keys1.every(key => count1[key] !== count2[key]);
}

const resultYes = areAnagrams("iceman", "cinema");
const resultNo = areAnagrams("mississippi", "mips"); // Same letters, but different counts
const resultNo2 = areAnagrams("burger", "burgers");
console.log(resultYes, resultNo, resultNo2);
