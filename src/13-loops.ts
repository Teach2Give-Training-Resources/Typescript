
const tsLoops = () => {

    console.log("--TypeScript Loops--");
    // for loop - used when the number of iterations is known
    console.log("\nFor Loop:");
    for (let i: number = 1; i <= 5; i++) {
        console.log(`Iteration: ${i}`);
    }


    // for...of loop - iterates over iterable objects (like arrays, strings, etc.)
    console.log("\nFor...of Loop:");
    const fruits: string[] = ["Apple", "Banana", "Cherry"];
    for (const fruit of fruits) {
        console.log(fruit);
    }

    // for...in loop - iterates over the keys of an object
    console.log("\nFor...in Loop:");
    const person = { name: "Alice", age: 25, city: "New York" };
    for (const key in person) {
        console.log(`${key}: ${person[key as keyof typeof person]}`);
    }

    // Nested loops
    console.log("\nNested Loops:");
    for (let i: number = 1; i <= 3; i++) {
        for (let j: number = 1; j <= 2; j++) {
            console.log(`i: ${i}, j: ${j}`);
        }
    }

    // break statement - exits the loop
    console.log("\nBreak Statement:");
    for (let i: number = 1; i <= 5; i++) {
        if (i === 3) {
            console.log("Breaking the loop at i = 3");
            break;
        }
        console.log(`Iteration: ${i}`);
    }

    // continue statement - skips the current iteration and continues with the next one
    console.log("\nContinue Statement:");
    for (let i: number = 1; i <= 5; i++) {
        if (i === 3) {
            console.log("Skipping iteration at i = 3");
            continue;
        }
        console.log(`Iteration: ${i}`);
    }


}

export default tsLoops;
