//Conditional statements are used to perform different actions based on different conditions

/*Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed*/
/*There are also comparison operators that can be used. 
a == b equal
a === b identical
a != b not equal
a !== not idential
a < b less than
a > b greater than
a <=b less than or equal to
a >= b greater than or equal to*/

//if(condition){
	// code to run if condition is true
//} else {
	// code to run if condition is false
//}

//If/else statement//

var applesEaten = 6;

         
            if( applesEaten > 5 ){
               console.log("There are only 5 apples");
            }
            
            else{
               console.log("You need to eat more apples");
            }

 //You can also use logical operators which are used to combine conditions
 // a && b which means and. So, a and b are true
 // a || b which means or. So, true if either a or b is true
 // !a which means not. So, true if a is not true

 var apples =5;
 if (apples >=2 && apples <7){
 	console.log("You have a reasonable number of apples");
 } else {
 console.log("check your apple supply");

 }
//****************************//
var number=1; 
var mymoney=0; 
if (number > 2) 
{ 
	console.log("I'm in good shape");
mymoney=100; 
} 
else 
{ 
mymoney= -100; 
console.log("I'm in trouble with the bank");
} 
//This set of code decides the fate of the variable mymoney, 
//based on the value of the variable number. 
//If number is greater than 2, then the value of mymoney will be changed to 100, and I'm in good shape 
//If number is not greater than 2, the mymoney is -100, and I'm in some trouble with my bank.

//if/else if/else statement//

var age =25;

if (age >=35){
	console.log("You can vote AND hold any place in government");
} else if (age >=25){
	console.log("You can vote AND run for the Senate");
}else if (age >= 18){
	console.log("You can vote");
} else {
	console.log("You can\'t vote, but you can still write your Representative.")
}

