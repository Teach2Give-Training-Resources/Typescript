const Polymorphism = () => {

    // Polymorphism is the ability of an object to take on many forms. In TypeScript, polymorphism is achieved through method overriding and method overloading.

    // Method Overloading
    // Method Overloading is a feature that allows a class to have multiple methods with the same name but different parameters.

    // illustration of method overloading 
    // In this example, we have a class called `Adder` that has a method called `add`.
    // The `add` method is overloaded to accept either two or three parameters.
    // If two parameters are passed, it returns their sum.
    // If three parameters are passed, it returns the sum of all three.
    class Adder {
        add(a: number, b: number): number;
        add(a: number, b: number, c: number): number;
        add(a: number, b: number, c?: number): number {
            if (c !== undefined) {
                return a + b + c;
            }
            return a + b;
        }
    }

    const adder = new Adder();
    console.log(adder.add(2, 3));      // Output: 5
    console.log(adder.add(1, 2, 3));   // Output: 6

    // methodOverride
    // Method Overriding is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass.
    // In this example, we have a class called `Animal` that has a method called `makeSound`.

    // We then create a subclass called `Dog` that overrides the `makeSound` method to provide a specific implementation for dogs.
    class Animal {
        makeSound(): void {
            console.log("Animal makes a sound");
        }
    }
    class Dog extends Animal {
        makeSound(): void {
            console.log("Dog barks");
        }
    }

    const animal = new Animal();
    const dog = new Dog();
    animal.makeSound(); // Output: Animal makes a sound
    dog.makeSound();    // Output: Dog barks
    // In this example, the `Dog` class overrides the `makeSound` method of the `Animal` class to provide a specific implementation for dogs.




}

export default Polymorphism;