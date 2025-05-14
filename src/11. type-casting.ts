const typecasting = () => {

    // Type casting using 'as' keyword
    let text: unknown = "Hello TypeScript";

    let str = text as string;
    console.log(typeof str); // Output: string

    // coverting string to number
    let num: string = "123";
    
    // using 'as' keyword
    let num1 = num as unknown as number; // we use unknown to convert string to number
    console.log(typeof num1); // Output: number


    // converting string to number using Number() function
    let num3 = "123"
    let num4 = Number(num3);
    console.log(typeof num4); // Output: number

    // converting string to number using parseInt() function
    let num5 = "123"
    let num6 = parseInt(num5);
    console.log(typeof num6); // Output: number

    



    
}

export default typecasting;