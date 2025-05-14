const Destructuring = () => {

    // Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.
    // It makes it easier to extract values from complex data structures.
    
  // Array destructuring
    const numbers = [1, 2, 3];
    const [first, second, third] = numbers;
    console.log(first);  // 1
    console.log(second); // 2
    console.log(third);  // 3

    // Object destructuring
    const person = { name: "Alice", age: 25 };
    const { name, age } = person;
    console.log(name); // Alice
    console.log(age);  // 25

    
    // Nested destructuring
    const user = {
        id: 1,
        profile: {
            name: "Bob",
            age: 30,
        },
    };

    const {
        profile: { name: userName, age: userAge },
    } = user;

    console.log(userName); // Bob
    console.log(userAge);  // 30

}

export default Destructuring;