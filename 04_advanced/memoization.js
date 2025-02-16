let cache = {};

const fib = n => {
  if (cache[n]) {
    return cache[n];
  }

  if (n <= 1) {
    const res = 1;
    cache[n] = res;

    return res;
  }
  const res = fib(n - 1) + fib(n - 2);
  cache[n] = res;

  return res;
};

console.log(fib(100));
