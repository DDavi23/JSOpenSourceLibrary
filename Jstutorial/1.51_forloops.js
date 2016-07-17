//performs a set of commands a number of times, 
//and ends when you have what you need. 

/*for ( condition1; condition2; command) 
{ 
JavaScript Statements.... 
}*/

//This means that the loop begins with condition 1, ends with condition 2, 
//and perform the command each time through. 

//will count 1 to 10

var count = 10;

for (var i = 0; i < count; i ++){
	console.log(i);
}

//can add other statements or logical operators inside of the loops
//count from 1 to 50
for (var i = 1; i <=50; i++){
	console.log(i);
	//says Buzz after multiples of three
	if (i % 3 == 0){
		console.log("Buzz");
	}
	//says Bang after multiple of five
	if (i % 5 == 0){
		console.log("Bang");
	}
}

//to exit from a loop
//count from 100 t0 200
for (var i = 100; i <=200; i++){
	console.log("Testing" + i);
}
