//JS objects inherit the properties and methods from their prototype

function car(seats, engine, theradio) {
    this.seats = seats;
    this.engine = engine;
    this.theradio = theradio;
}

var myCar = new car("leather", "V8", "satellite radio");
var wishCar = new car("leather", "V8", "pandora");

console.log(wishCar);//prints car { seats: 'leather', engine: 'V8', theradio: 'pandora' }
console.log(myCar.seats);//prints leather