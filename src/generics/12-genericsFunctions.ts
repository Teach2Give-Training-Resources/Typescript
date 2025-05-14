const myGenerics = () => {

    // https://www.typescriptlang.org/docs/handbook/2/generics.html

    // Generics are a way to create reusable components that can work with any data type.

    // WHY WE NEED GENERICS
    // function getFirstElement(array: any[]) { //or use any[] to accept any type of array
    //     // function getFirstElement(array: any[])
    //     return array[0];
    // }

    // The above function only works with arrays of numbers. 
    // const numbers = [1, 2, 3, 4, 5];
    // const firstNumber = getFirstElement(numbers);

    // what if we want to get the first element of an array of strings?
    // Try this:

    // const strings = ['a', 'b', 'c', 'd', 'e'];
    // const firstString = getFirstElement(strings); // Error: Argument of type 'string[]' is not assignable to parameter of type 'number[]'.




    // so this would need us to create a new function for each type of array we want to use. .e
    // function getFirstElement(array: string[]) {
    //     return array[0];
    // }

    // This is not efficient and not scalable.


    function getFirstElement<T>(array: T[]) {

        return array[0];
    }

    const numbers = [1, 2, 3, 4, 5];
    // const firstNumber = getFirstElement(numbers);
    const firstNumber = getFirstElement<number>(numbers);


    const strings = ['a', 'b', 'c', 'd', 'e'];
    const firstString = getFirstElement(strings); // Error: Argument of type 'string[]' is not assignable to parameter of type 'number[]'.


}

export default myGenerics;