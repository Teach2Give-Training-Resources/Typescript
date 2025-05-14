const spreadRest = () => {

    // Spread operator     
    // Used to expand elements of an array or object
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
    console.log("combined array: ", combined);

    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const combinedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
    console.log("combined object: ", combinedObj);


    // Rest operator
    // Used to collect multiple elements into an array

    const fifteenValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const [first, second, ...rest] = fifteenValues; // first = 1, second = 2, rest = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    console.log("first: ", first);
    console.log("second: ", second);
    console.log("rest: ", rest);


}

export default spreadRest;