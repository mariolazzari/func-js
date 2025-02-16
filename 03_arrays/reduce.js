const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = numbers.reduce((prev, curr) => prev + curr);
console.log("Sum", sum);

numbers.reduce((res, n) => {
  console.log("Result is: ", res, n);
  return res + n;
});
