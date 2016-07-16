// is a behavior that can be reused by cloning existing objects that serve as prototypes.

//first, create a function 
var ClassA = function() {
    this.name = "This";
}

ClassA.prototype.print = function() {
    console.log(this.name);
}

var a = new ClassA();

a.print();
//this is used to clone the prototype
var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};
//So if we want to add a second class that will be a child of the first one, 
//we just have to use this code:
var ClassB = function() {
    this.name = "JS";
}

inheritsFrom(ClassB, ClassA);
//Then because ClassB inherited the print function from ClassA, t
//the following code is working:
var b = new ClassB();
b.print();
// call ClassA.prototype to get the base print function
//Then call the base function on the current object (this).
var ClassC = function () {
    this.name = "stuff";
}

inheritsFrom(ClassC, ClassB);


ClassC.prototype.print = function () {
    ClassB.prototype.print.call(this);
    console.log("Can be confusing!");
}

var c = new ClassC();
c.print();