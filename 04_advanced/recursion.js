const countdown = x => {
  if (x === 0) {
    return console.log("END"); // stop
  }
  console.log(x);
  countdown(x - 1); // change
};

countdown(10);

const fib = n => {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(10));
