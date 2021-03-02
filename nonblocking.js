// console.log("Oh")

// setTimeout(function(){
//     console.log("Just waking up...")
//   }, 2000)

// console.log("*Rubs eyes*")

// console.log("*Yawns*")

// setTimeout(function(){
//     console.log("Hi...")
//   }, 1000)

//////////

///STACK ERROR

// function func1 () {
//     // Accessing undefined variable will throw error
//     console.log(err);
//   }
//   function func2 () {
//    func1();
//   }
//   function func3 () {
//    func2()
//   }
//   // Calling func3, will result in error in func1
//   func3();
  
// function multiply(a, b) {
//   return a * b
// }

// function square(n) {
//   return multiply(n, n)
// }

// function printSquare(n) {
//   const squared = square(n)
//   console.log(squared)
// }



// function baz() {
//     console.log( 'Hello from baz' );
//   }
  
//   function bar() {
//     baz();
//   }
  
//   function foo() {
//     bar();
//     printSquare(2)
//   }
  
//   foo();

//// PROMISE/JobQueue

// console.log('Message no. 1: Sync');
// setTimeout(function() {
//    console.log('Message no. 2: setTimeout');
// }, 0);
// var promise = new Promise(function(resolve, reject) {
//    resolve();
// });
// promise.then(function(resolve) {
//    console.log('Message no. 3: 1st Promise');
// })
// .then(function(resolve) {
//    console.log('Message no. 4: 2nd Promise');
// });
// console.log('Message no. 5: Sync');