const divide = (n, m) => n / m;

const checkZero =
  fn =>
  (...args) => {
    if (args[1] === 0) {
      return console.error("Divide by zero");
    }

    return fn(...args);
  };

const divideSafe = checkZero(divide);
console.log(divideSafe(10, 2));
console.log(divideSafe(10, 0));
