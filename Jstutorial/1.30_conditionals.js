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

