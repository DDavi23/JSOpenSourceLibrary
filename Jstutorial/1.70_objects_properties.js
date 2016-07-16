//can be any of the three primitive data types, 
//or any of the abstract data types, such as another object. 
//Object properties are usually variables that are used internally 
//in the object's methods, but can also be globally visible variables that are used throughout the page.

//The syntax for adding a property to an object is −
/*var objectName = { 
  propertyName: propertyValue,
  propertyName: propertyValue,
  ...
};*/

var aboutMe = {
  hometown: 'Hampton, VA',
  hair: 'black',
  likes: ['reading', 'learning'],
  birthday: {month: 12, day: 04}
}; 
console.log(aboutMe); //this will return every property in variable aboutMe
console.log(aboutMe.hometown); //this will return my hometown
console.log(aboutMe.hair)//this returns my hair color
	
//You can retrieve values using "dot notation"
var aboutMe = {
  hometown: 'Hampton, VA',
  hair: 'black'
}; 
var myHometown = aboutMe.hometown;
console.log(aboutMe.hometown)//prints my hometown 

//Or using "bracket notation" (like arrays)
var myHair = aboutMe['hair'];
console.log(aboutMe.hair)//prints hair color

//You can use dot or bracket notation to change properties
var aboutMe = {
  hometown: 'Hampton, VA',
  hair: 'black'
}; 
aboutMe.hair = 'red';

//Add new properties
aboutMe.gender = 'female';

//Or delete them
delete aboutMe.gender;