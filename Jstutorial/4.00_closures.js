//Closures are functions that refer to independent (free) variables
// (variables that are used locally, but defined in an enclosing scope). 
//In other words, these functions 'remember' the environment in which they were created.

function makeFunc() {
  var name = "Danyel";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
console.log(myFunc);