const person = {
    name: "John",
    age: 30,

    sayHello: function() {
        console.log("Hello");
    }
};

person.sayHello(); // Hello
person.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

person.sayHello(); 


const people = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Mike",
        age: 23
    },
    {
        name: "Nancy",
        age: 40
    }
];


for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}

