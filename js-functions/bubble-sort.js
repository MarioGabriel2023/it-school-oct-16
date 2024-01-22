let initialNumber = 24;

function addTenToNumber(number) {
  number = number + 10;
  return number;
}

initialNumber = addTenToNumber(initialNumber);

console.log(initialNumber);

const person = {
  name: "Andrei",
  age: 10,
};

function happyBirthday(user) {
  user.age++;
}

happyBirthday(person);

console.log(person);

let numeFunctie = function (param1) {
  param1.age++;
};

let arrowFunction = (param1, param2) => {
  param1.age++;
};

numeFunctie(person);

arrowFunction(person);

console.log(person);
