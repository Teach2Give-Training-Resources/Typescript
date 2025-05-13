const callbacks = () => {
    // Callbacks are functions that are passed as arguments to other functions

    function doHomeWork(subject: string, callFinishedHomework: (subject: string) => string) {
        console.log(`I have started my ${subject} homework`);
        const result = callFinishedHomework(subject);
        console.log(result);
    }

    function finishedHomework(subject: string): string {
        return `I have finished my ${subject} homework`;
    }

    doHomeWork("Math", finishedHomework);


    // Callbacks with Arrow Functions
    // function doHomeWork2(subject: string, callFinishedHomework: (subject: string) => string) {
    //     console.log(`I have started my ${subject} homework`);
    //     const result = callFinishedHomework(subject);
    //     console.log(result);
    // }

    // doHomeWork2("Math", (subject: string) => {
    //     return `I have finished my ${subject} homework`;
    // });

}

export default callbacks;