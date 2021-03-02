console.log("Oh")

setTimeout(function(){
    console.log("Just waking up...")
  }, 2000)

console.log("*Rubs eyes*")

console.log("*Yawns*")

setTimeout(function(){
    console.log("Hi...")
  }, 1000)

//////////
function multiply(a, b) {
  return a * b
}

function square(n) {
  return multiply(n, n)
}

function printSquare(n) {
  const squared = square(n)
  console.log(squared)
}



function baz() {
    console.log( 'Hello from baz' );
  }
  
  function bar() {
    baz();
  }
  
  function foo() {
    bar();
    printSquare(2)
  }
  
  foo();