// debounce and throtling

// debounce -> apt use case search
// throtling -> drag screen on dragevent


// apply, call, bind

// apply -> calling a function by passing  -> array of arguments
// call -> calling a function by passing  -> comma seperate
// bind ->  will not directly call a function

function sum(param1, param2) {
  console.log(param1, param2, (this.num1 + this.num2));
}

window.num1 = 3;
window.num2 = 10;
sum('sum of window');

const obj1 = {
  num1: 100,
  num2: 200
}

const obj2 = {
  num1: 1000,
  num2: 2000
}

sum.apply(obj1, ['sum of obj1', 'param2']);
sum.apply(obj2, ['sum of obj2', 'param2']);

const newSum = sum.bind(obj1, ['sum of obj2', 'param2']);
newSum()




// closure 
function foo() {
  var a = 10;

  
  setTimeout(() => {
    console.log(a);
  }, 100);
}

// If a function remembers its lexical scope where it is declared. then we can call that function as closure to the parent function

foo();





// filter map reduce -> array


// filter -> [1, 2, 4, 5, 6]

const arr = [1, 2, 5, 7, 4, 8];

const filteredArray = arr.filter((value) => {
  if (value % 2 === 0) return true;
  else return false;
})
console.log(filteredArray);


// map - [1, 2, 3, 4]

const mapArray = [1, 2, 5, 7, 4, 8];
const mappedArray = mapArray.map(value => {
  return value % 2 === 0 ? true : false;
})

console.log(mappedArray);

// reduce = [1, 2, 3, 4]

const reduceArray = arr.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0)

console.log(reduceArray)

// [{
// id: 1,
// value: 2
// }, {
//   id: 2,
//   value: 3
// },{
//   id: 1, 
//   value: 4
// },{
//   id: 3,
//   value: 6
// },{
//   id: 1,
//   value: 4
// },{
//   id: 2,
//   value: 5
// }]
