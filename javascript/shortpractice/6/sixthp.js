function friends(people){
    if(people.length == 0) {
        return undefined
    }

    const newPeople = {}
    for (const person of people) {
        newPeople[person.name] = {friends: person.friends, loyalFriends: 0}
    }
    
    for (const person of people) {
        for (const friend of person.friends) {
            const isFriend = newPeople[friend].friends.includes(person.name)
            if (isFriend) {
                newPeople[person.name].loyalFriends += 1
            }
        }
    }

    let maxFriendsPerson = undefined
    for (const [name, value] of Object.entries(newPeople)) {
        if (maxFriendsPerson === undefined){
            maxFriendsPerson = name;
            continue;
        }
        if (value.loyalFriends > newPeople[maxFriendsPerson].loyalFriends){
            maxFriendsPerson = name
        }
        return maxFriendsPerson
    }


}
const people =[
    {"name": "Tim", "friends": ["John", "Sally"]},
    {"name": "John", "friends": ["Tim", "Mike"]},
    {"name": "Mike", "friends":[]},
    {"name": "Sally", "friends": ["Tim"]}
]

const mostLoyalfriends = friends(people)
console.log(mostLoyalfriends)

/*
in this code we made function with a parameter containing an array of objects
the array people has 4 objects each containg a property name friends list in the form of an array
next we created another object in the function and use a for loop to 
get the name of each person as property/key and have the value be an object with their friends list 

*/