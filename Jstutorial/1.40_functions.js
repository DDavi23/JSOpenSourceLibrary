/* A function is a set of JavaScript statements put together for a single purpose
they help to organize the various parts of a script into the different tasks that must
be accomplihed. They can also be used more than once
we do not have to define the function before we use it
the code for a function MUST be contained by curly brackets {}
To make use of the function, you will make a call to the function when you want to use it. 
You call a function by using the name, any parameters you want to send, and a semicolon, like this:*/

function dosomething (mymoney, cost);


function turtleFact() {
	console.log("A turtle\'s lower shell is called a plastron.");
}
         
            
//Once you declare the function, you can you turtleFact(); as many times as you want

turtleFact();
//line 13 will print out the fact about the turtle

//Functions can accept arguments

function callDog(dogName){
	console.log("Come here Brewster");
}
callDog ("Brewster");

function addNumbers (a,b){
	console.log(a+b);
}
addNumbers(5,7);
addNumbers(9,12);

