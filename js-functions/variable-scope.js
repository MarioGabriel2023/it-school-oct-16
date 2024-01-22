// 1.
let randomVariable = 20;

if (true) {
  console.log("if", randomVariable);
}

function showRandomVariable() {
  console.log("function", randomVariable);
}

showRandomVariable();

// 2.
if (true) {
  let randomVariableBlock = "KJSBAIJFBSD";
  console.log(randomVariableBlock);
  if (true) {
    console.log(randomVariableBlock);
  }
}

// console.log(randomVariableBlock);

{
  let randomVariableBlock = "KJSBAIJFBSD";
  console.log(randomVariableBlock);
  if (true) {
    console.log(randomVariableBlock);
  }
}

// console.log(randomVariableBlock);

// 3.
function functionScope() {
  const randomVariableFunction = true;

  console.log(randomVariableFunction);

  if (true) {
    console.log(randomVariableFunction);
  }
}

functionScope();

console.log(randomVariableFunction);
