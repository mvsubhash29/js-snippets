// prototype
function Sound(name) {
  this.name = name;
}
Sound.prototype.bark = function() {
  console.log(`${this.name} barking`)
}

function Walking(name) {
  this.name = name;
}
Walking.prototype.walk = function() {
  console.log(`${this.name} walking`)
}

Walking.prototype.__proto__ = Sound.prototype;
const walk = new Walking('puppy');
walk.walk();
walk.bark()


// sum(1)(2)(3)() -> currying
function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b)
    } else {
      return a;
    }
  }
}

console.log('Function currying', sum(1)(2)(3)())

// var flattenArray = [1, 2, [3, 4], [5, 6, [8,9]]]

var flattenArray = [1, 2, [3, 4], [5, 6, [8,9]]]
let newFlattenArray = [];
function flattenArrayFun(arr) {
  arr.forEach(element => {
    if (element instanceof Array) {
      flattenArrayFun(element)
    } else {
      newFlattenArray = [...newFlattenArray, element]
    }
  })
  
}
flattenArrayFun(flattenArray)
console.log('Flattern Array ', newFlattenArray)



// map, filter, reduce
/*
 * map - to transfer the array ex: double the number in the array
 * var arr = [1,2,3,4] => output [2,4,6,8]
 */

var arr = [1,2,3,4]

function double(x) {
  return x*2;
}

var output = arr.map(double);

console.log(output);

/**
 * filter - Filter is used for filter the array
 * ex: var arr = [2.4.3.6.7] -> filter out all the even number or filter out all the number greater than 3
 */

var filterArr = [2,4,3,6,7]

function greaterThanThree(x) {
  return x > 3;
}

var outputfilter = filterArr.filter(greaterThanThree);

console.log(outputfilter);

/**
 * reduce - reduce is used for reduce the array into single instance 
 * ex: Sum of all the numbers in the array
 * ex: filter out the 
 */

var reduceArr = [5,6,3,8,1,2];

function sumOfArr(acc, currentVal) {
  return acc + currentVal;
}

var outputReduce = reduceArr.reduce(sumOfArr);
console.log(outputReduce);

var arrOfUsers = [
  {
    firstName: 'Subhash',
    lastName: 'Matta',
    age: 26
  },
  {
    firstName: 'Dimple',
    lastName: 'K',
    age: 24
  },
  {
    firstName: 'Ram',
    lastName: 'Y',
    age: 26
  }
]

// filter out the unique ages - [{26: 2, 24: 1}]

var uniqueAges = arrOfUsers.reduce((acc, current) => {
  if (acc[current.age]) {
    acc[current.age] = acc[current.age] + 1;
  } else {
    acc[current.age] = 1
  }
  return acc;
}, {})

console.log(uniqueAges);

/**
 * Object.freeze(obj);
 * 
 * The Object.freeze() method freezes an object. A frozen object can no longer be changed; 
 * freezing an object prevents new properties from being added to it, existing properties from being removed, 
 * prevents changing the enumerability, configurability, or writability of existing properties, 
 * and prevents the values of existing properties from being changed. 
 * In addition, freezing an object also prevents its prototype from being changed. 
 * freeze() returns the same object that was passed in.
 */

const obj = {
  prop: 42
}

Object.freeze(obj);

obj.prop1 = 32;
console.log(obj.prop1);
