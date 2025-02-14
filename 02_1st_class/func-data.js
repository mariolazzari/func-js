const sayHello = name => console.log("Hello " + name);
const sayHello2 = sayHello;

sayHello("Mario");
sayHello2("Mario");

const shouldAdd = true;
const fn = shouldAdd ? (x, y) => x + y : (x, y) => x - y;
console.log(fn(10, 20));

const fetchDataReal = () => {
  console.log("Fetching data...");
};

const fetchDataFake = () => ({
  name: "Mario",
});

const IS_TESTING = true;
const fetchData = IS_TESTING ? fetchDataFake : fetchDataReal;
fetchData();
