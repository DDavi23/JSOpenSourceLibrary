//loops through a block of code a number of times

/*for (initialization; condition; final expression) {
    code block to be executed
}*/
//will count 1 to 10
var count = 10;

for (var i = 0; i < count; i ++){
	console.log(i);
}

//can add other statements or logical operators inside of the loops
//count from 1 to 50
for (var i = 1; i <=50; i++){
	console.log(i);
	//says Buzz Fter multiples of three
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
