function countOccurrences(arr) {
  return arr.reduce((prev, cur) => {
    if (!prev[cur]) {
      return { ...prev, [cur]: 1 };
    }

    return { ...prev, [cur]: prev[cur] + 1 };
  }, {});
}

const items = ["a", "a", "b", "b", "b", "c", "d"];
let result = countOccurrences(items);
console.log(result);

function countOccurrences2(arr) {
  return arr.reduce((prev, cur) => {
    return {
      ...prev,
      [cur]: prev[cur] ? prev[cur] + 1 : 1,
    };
  }, {});
}

result = countOccurrences2(items);
console.log(result);
