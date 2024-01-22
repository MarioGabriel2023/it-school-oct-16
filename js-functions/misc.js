// 1.
const number1 = "123";
const number2 = "6539.764";

console.log(parseInt(number1));
console.log(parseFloat(number2));

console.log(parseInt(number1) === 123);

// 2.
console.log(Math.abs(-10));
console.log(Math.ceil(534.4));
console.log(Math.floor(534.5));
console.log(Math.max(...[1, 20, 876, -40]));

// 3.
const numbers1 = [1, 2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10];

console.log([...numbers1, ...numbers2]);

// 4.
const person = {
  name: "Mihai",
  age: 20,
  address: {
    street: "Nume Strada",
    number: "10",
  },
};

function generateSibling(person, name, age) {
  return { ...person, name: name, age: age };
}

console.log(generateSibling(person, "Ioana", 8));
