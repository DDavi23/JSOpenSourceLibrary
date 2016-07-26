//also known as a higher-order function, is a function that is passed to another function as a parameter, 
//and the callback function is called inside the other Function. 
//A callback function is a pattern, and therefore, the use of a callback function is also known as a callback pattern.

var classmates = ["Tara", "Evan", "James"];
​
classmates.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Tara 2. Evan, 3. James, 
});
