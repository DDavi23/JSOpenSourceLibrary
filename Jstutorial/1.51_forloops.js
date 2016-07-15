//loops through a block of code a number of times

/*for (initialization; condition; final expression) {
    code block to be executed
}*/


var myDogs = [
  {name: 'Brewster', 
   age: 4},
  {name: 'Charlie',
   age: 14}
];

for (var i = 0; i < myDogs.length; i++) {
  var myDog = myDogs[i];
  console.log(myDog.name + ' is ' + myDog.age + ' years old.');

//we initialize with i = 0 and iterate while our condition i < 5 is true
// We'll increment i by 1 in each loop iteration with i++ as our final-expression.