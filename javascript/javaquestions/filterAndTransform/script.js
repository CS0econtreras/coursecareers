function filterAndTransform (people) {
    const adults = people.filter(person => person.age >= 18);

    const transformed = adults.map(person => {
        return `${person.name} is ${person.age} and loves ${person.hobby}`
    })

    return transformed;
    /* wrong
    const aggregatedPeople = people.reduce((acc, {name, age, hobby}) => {
        const key = `${name} is ${age}`;
        if (!acc[key] && age > 18) {
            acc[key] = {name, age, hobby};
        }
        return acc;
    }, {});

    console.log(aggregatedPeople)
    return Object.values(aggregatedPeople).map((person) => {
            return `${person.name} is ${person.age} and loves ${person.hobby}`
    }*/
}

const people = [
    { name: "Alice", age: 25, hobby: "painting" },
    { name: "Bob", age: 17, hobby: "coding" },
    { name: "Charlie", age: 32, hobby: "cycling" },
    { name: "Dave", age: 15, hobby: "gardening" }
    ];

    const result = filterAndTransform(people);
    console.log(result);