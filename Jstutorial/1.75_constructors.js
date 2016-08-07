/*allows you to build an object using the same basic syntax as a regular function
The difference is where you place the code inside of the function and where you 
access its contents*/

function Hotel () {//the constructor is defined
	//properties go here
}

function Hotel(name, rooms, booked) {
	this.name  = name;//this is used instead of the object name to indicate
	this.rooms = rooms;//that the property or method belongs to the object
	this.booked = booked;//that this functions creates
	this.checkAvailability = function() {
		return this.rooms - this.booked;
	};
}
var holidayHotel = new Hotel("Holiday", 200, 151);
var indigoHotel = new Hotel("Indigo", 150, 75);




var hotel = new Object();

hotel.name = "Holiday Inn Express";
hotel.rooms = "200";
hotel.booked = "151";
hotel.checkAvailability = function() {
	return this.rooms - this.booked;
};




