// function return function

function fn(val1, val2) {
  console.log("sum of val1 and val2 = ", val1 + val2);
  function ht(val3) {
    console.log("function inside function call", val3);
  }

  return ht;
}

let fnData = fn(1,2)
fnData(5)
