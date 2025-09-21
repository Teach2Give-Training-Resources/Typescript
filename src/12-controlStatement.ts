

const controlStatments = () => {
    console.log("--TypeScript Control Statements--");

    //if statement
    console.log("\nIf Statement:");
    let age: number = 18;

    if (age >= 18) {
        console.log("You are eligiable to vote.");
    }





    //if-else statement
    console.log("\nIf-Else Statement:");

    if (age < 12) {
        console.log("You are not eligiable to vote.");
    } else {
        console.log("You are eligiable to vote.");
    }





    //if-else-if ladder
    console.log("\nIf-Else-If Ladder:");
    let score: number = 88;

    if (score >= 70 && score <= 100) {
        console.log("Grade A");
    } else if (score >= 60 && score < 70) {
        console.log("Grade B");
    } else if (score >= 50 && score < 60) {
        console.log("Grade C");
    } else if (score >= 40 && score < 50) {
        console.log("Grade D");
    } else if (score >= 0 && score < 40) {
        console.log("Grade E");
    } else {
        console.log("Invalid Score");
    }


    //switch statement
    console.log("\nSwitch Statement:");
    let day: number = 3;
    let dayName: string;

    switch (day) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid Day";
    }
    console.log(`\nDay ${day} is ${dayName}`);



    //while loop
    let count: number = 1;
    console.log("\nWhile Loop:");

    while (count <= 5) {
        console.log(`Count: ${count}`);
        count++;
    }


    //do-while loop
    count = 1;
    console.log("\nDo-While Loop:");
    do {
        console.log(`Count: ${count}`);
        count++;
    } while (count <= 5);


}


export default controlStatments;
