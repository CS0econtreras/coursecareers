class Person {
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
//use back ticks for templetes in js 
// this is also a method that can be called on different class instances
    sayHi() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
}

const person = new Person("Tim", 10);
const person2 = new Person("Bob", 11);

person.sayHi();
person2.sayHi();