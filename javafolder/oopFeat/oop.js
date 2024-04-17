//using an object as the prototype for a different object
const personPrototype = {
    greet () {
        console.log("hello")
    }
}

const tim = Object.create(personPrototype);
tim.greet();