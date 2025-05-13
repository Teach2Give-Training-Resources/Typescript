const typeAlliances = () => {

    /* TypeScript has a concept of "type alliances" which allows you to create
     types that are based on other types. This can be useful for creating
   more complex types that are based on simpler types.
      */


    // 1. Type Aliases: You can create a type alias using the type keyword.
    type Person = {
        name: string;
        age: number;
        hobbies: string[];
    };
    type Employee = Person & { //means Employee is a type that has all the properties of Person and also has its own properties
        employeeId: number;
        position: string;
    };

    const employee: Employee = {
        name: "Kemboi",
        age: 25,
        hobbies: ["reading", "coding"],
        employeeId: 12345,
        position: "Software Developer"
    };


    console.log("--TypeScript Type Alliances--");
    console.log(`Employee Details: ${JSON.stringify(employee)}`);
    // or
    console.log(`Employee Details: ${employee.name} is ${employee.age} years old and enjoys ${employee.hobbies.join(", ")}. Their employee ID is ${employee.employeeId} and their position is ${employee.position}.`);


}

export default typeAlliances;