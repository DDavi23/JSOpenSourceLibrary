var BrewsterTheDog = {
  age: 4,
  furColor: 'tan',
  dog: function() {
    console.log('woof');
  },
  eat: function(food) {
    console.log('Slurp, I love ' + food);  
  },
};

BrewsterTheDog.dog();
BrewsterTheDog.eat('Hungery Howie pizza crust');
