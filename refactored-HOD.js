'use strict';

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);

////////////////////////////////////

function filter() {
  // TASK: Define your function here
  const myNames = [ 'Rich', 'Joe', 'Bhaumik', 'Ray' ];
  let newArr = [];

  for (let i of myNames) {
    for (let j of i) {
      if (j === 'R') {
        newArr.push(i);
      }
    }
  }
  return newArr;
}

filter();

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = [ 'Rich', 'Joe', 'Bhaumik', 'Ray' ];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

////////////////////////////////////

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times(s) today!`);
  };
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

////////////////////////////////////

let turtleCords = [ [ 0, 0 ], [ 0, 5 ], [ -1, -3 ], [ -3, 1 ], [ 2, -4 ], [ 3, 2 ] ];

let result = turtleCords.filter((cords) => cords[0] >= 0 && cords[1] >= 0);
console.log(result);

let result_2 = turtleCords.map((steps) => steps[0] + steps[1]);
let stepCounter = 0;
result_2.forEach(function(steps) {
  stepCounter++;
  if (steps !== 0) {
    console.log(`Movement #${stepCounter}: ${steps} steps`);
  } else {
    console.log(`Movement #${stepCounter}: ${steps} step`);
  }
});

////////////////////////////////////

let decodeStr = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let newStr = decodeStr.split(' ').reduce(func, '');

function func(param1, param2) {
  if (param2.length === 3) {
    return param1 + ' ';
  }
  return param1 + param2.slice(-1).toUpperCase();
}

console.log(newStr);
