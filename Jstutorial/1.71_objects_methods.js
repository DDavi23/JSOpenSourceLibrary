//can hold functions
//call object methods using dot notation


var brewsterTheDog = {
  age: 4,
  furColor: 'tan',
  dog: function() {
    console.log('woof');
  },
  eat: function(food) {
    console.log('Slurp, I love ' + food);  
  },
};

brewsterTheDog.dog();
brewsterTheDog.eat('Hungery Howie pizza crust');

/*built-in methods are:
arrays
booleans
numbers
strings
regexp
date
math*/

// Define a function which will work as a method
         function addPrice(amount){
            this.price = amount; 
         }
         
         function book(title, author){
            this.title = title;
            this.author  = author;
            this.addPrice = addPrice; // Assign that method as property.