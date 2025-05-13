const myfunctions = () => {

    // Function Declaration
    function add(x: number, y: number): number {
        return x + y;
    }

    // Function Expression
    const subtract = function (x: number, y: number): number {
        return x - y;
    };

    // Arrow Function
    const multiply = (x: number, y: number): number => {
        return x * y;
    };

    // Optional Parameters
    const divide = (x: number, y?: number): number => {
        if (y) {
            return x / y;
        }
        return x;
    };

    console.log(add(5, 10));
    console.log(subtract(10, 5));
    console.log(multiply(5, 10));
    console.log(divide(10));
}

export default myfunctions;