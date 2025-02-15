const double = n => 2 * n;
const minus1 = n => n - 1;
const square = n => n * n;

const myNunber = 42;
const doubled = double(myNunber);
const lessOne = minus1(doubled);
const squared = square(lessOne);
console.log("n =", squared);

const funcs = [double, minus1, square, Math.sqrt];
let res = myNunber;
funcs.forEach(f => {
  res = f(res);
});
console.log(res);
