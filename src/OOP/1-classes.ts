const classes = () => {
    // class in OOP is a blueprint for creating objects
    // class is a template for creating objects

    // Create a class
    class Person {
        // properties
        name: string;
        age: number;
        // constructor
        constructor(name: string, age: number) { //used to initialize the properties of the class
            this.name = name;
            this.age = age;
        }

        // methods
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }

        // static method - is a method that belongs to the class itself, not to instances of the class
        static sayHello() {
            console.log("Hello!");
        }
    }

    // Create an instance of the class
    const person1 = new Person("John", 30);
    const person2 = new Person("Jane", 25);

    // Call the method
    person1.greet(); // Output: Hello, my name is John and I am 30 years old.
    person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.

    // Call the static method
    Person.sayHello(); // Output: Hello!




    // NOTE: another way to do the same thing is to use the constructor method

    class Aperson {
        constructor(public name: string, public age: number) { }
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
        static sayHello() {
            console.log("Hello!");
        }
    }

    // Create an instance of the class
    const aperson1 = new Aperson("John", 30);
    const aperson2 = new Aperson("Jane", 25);
    // Call the method
    aperson1.greet(); // Output: Hello, my name is John and I am 30 years old.
    aperson2.greet(); // Output: Hello, my name is Jane and I am 25 years old.
    // Call the static method
    Aperson.sayHello(); // Output: Hello!


}

export default classes;