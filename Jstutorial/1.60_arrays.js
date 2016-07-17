// Arrays are usually a group of the same variable type 
//they can use an index number to distinguish them from each other.

//this is defining 5 varibles

/*quote1="I like JavaScript."; 
quote2="I used to like Java."; 
quote3="JavaScript rules."; 
quote4="Help!"; 
quote5="Just Kidding.";

to write this as an array, you would put it in this form
var Name_of_Array= new Array(number_of_elements);

Name_of_Array would be the name you want to give the array variable, 
the number_of_elements is the number of variables you want the array to store
var quote= new Array(5)

//to assign values, use what is called an index number, and place it inside brackets
quote[0]
//in arrays, the first element is always zero 
//and the last element is always one less than what you define as the number of elements
//semicolon's are not at the end of the array definition, 
//and are used at the end of each element we define.*/

var quote= new Array(5) 
quote[0]="I like JavaScript."; 
quote[1]="I used to like Java."; 
quote[2]="JavaScript rules."; 
quote[3]="Help Me!"; 
quote[4]="Just Kidding.";
console.log(quote[3]);

//arrays can also have different forms of data
var lotteryNumbers = [02, 04, 01, 12, 07, 06];
console.log(lotteryNumbers.length);
//.length gives us the number of elements
//prints out 6

console.log(lotteryNumbers);
//prints out all the lottery lotteryNumbers

