class Persons {
    name;
    age;


    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    greet() {
        return this.name + " " + this.age
    }
}

// this is syntax to inherite functionality form one class to the other

class Student extends Persons {
    group;

    constructor (name, age, group) {
        //allows you to refrence to you parent class
        super(name, age);
        this.group = group;
    }
    //This functinon is overwritten kinda like a prototype we look for the 
    //function in this class before we use the greet method if not found
    //we look in the parent class and if we want to use both greet methods
    //we can use super.greet() to access the parent greet function as well
    greet() {
        return "I am the student " + this.name + super.greet();
    }
}