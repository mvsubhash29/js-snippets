function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.getName = function() {
  return this.name;
}

Animal.prototype.getSound = function() {
  return this.sound;
}


const animalOne = new Animal('dog', 'bark');


Array.prototype.yogithaArray = function(arg) {
  this.push(arg)
}

String.prototype.yoigthaString =  function(str) {
  
}

var carr = [1,2,3];
carr.yogithaArray(12);

[12,34,56].push('34');

var a2 = [12, 34, 56]
a2.yogithaArray(1000);

console.log(carr)
console.log(a2)






















function Dog(name, sound) {
  this.name = name;
  this.sound = sound;
}

Dog.prototype.dogMethod = function() {
  console.log('inside dogMethod', this.name, this.sound);
}



Dog.prototype.__proto__ = Animal.prototype;


const firstDog = new Dog('first dog', 'bark')






// higher order function 

function bar() { console.log('inside bar')}

function parentfn(callback) { // if a function takes another function as param then we can can that fn as HOF
  console.log('inside foo');
  callback();
}

parentfn(bar);

// real example

// first api call ayindi -> response vachindi -> id -> in

function firstCall() {
  api.call('', (err, response) => {
    if (response.id) {
      api.call('', (err, response) => {

      })
    }
  })
}

// splice -> add or remove of elements into array
// -> same array manipulate 

// slice -> returns the new array [start, end] it doesn't manipulate original array





// generators -> es6 -> return iteratable object -> when call next() -> {value: '', done: false}
// promise -> es6
// async/ await -> promise object.

// http://es6-features.org/#Constants

// difference between slice and splice 
// .push, .pop, .filter, .map, .reduce, shift, unshift -> ****

// prototype
// hof -> high order function -> function foo
// currying
// callback hell 
// debugging
// git -> version control tool


function promiseDemo(num) {
  const promiseObj = new Promise((resolve, reject) => {

    setTimeout(() => {
      if (num > 100) {
        resolve(`success - ${num}`); 
      } else {
        reject(`error - ${num}`)
      }
    }, 100);
    
  })
  return promiseObj;
}

const arr = [50, 20, 600];

const promiseObj1 = promiseDemo(arr[0]);
const promiseObj2 = promiseDemo(arr[1]);
const promiseObj3 = promiseDemo(arr[2]);

const promiseArr = [promiseObj1, promiseObj2, promiseObj3];

Promise.any(promiseArr)
  .then(resultArray => console.log(resultArray))
  .catch(error => console.log(error))


// const p = promiseDemo(50);
// p.then(function(message) {
//   console.log(message)
// }).catch(function(error) {
//   console.log(error);
// }).finally(function() {
//   console.log('finally')
// })


async function promiseAsyncDemo(num) {
  try {
    const message = await new Promise((resolve, reject) => {

      setTimeout(() => {
        if (num > 100) {
          resolve('success'); 
        } else {
          reject('error')
        }
      }, 10000);
      
    });
    console.log(message)
  } catch(error) {
    console.error(error)
  } finally {
    console.log('finally')
  }
}

promiseAsyncDemo(20);

















// generator - special function in js introduced in es6

// function* foo() {
//   console.log('first statement');
//   console.log('second statement');

//   yield 3+5; 

//   console.log('third statment');
 

//   yield 'fourth yield statement';

//   console.log('third statment');
//   console.log('third statment');
//   console.log('third statment');

//   yield 'last statement'
// }



// const iteratableObj = foo();

// const step1 = iteratableObj.next();
// console.log(step1)

// const step2 = iteratableObj.next();
// console.log(step2);


// const step3 = iteratableObj.next();
// console.log(step3)

