const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = true;

for (const n of numbers) {
  if (n % 2 !== 0) {
    res = false;
    break;
  }
}
console.log("Every even?", res);

const isEven = n => n % 2 === 0;
res = numbers.every(isEven);
console.log("Every even?", res);

res = numbers.some(isEven);
console.log("Some even?", res);
