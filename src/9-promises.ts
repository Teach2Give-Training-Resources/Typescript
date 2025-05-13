const Mypromises = () => {
    
    const myPromise = new Promise((resolve, reject) => { // Simulating an asynchronous operation
        setTimeout(() => {
            resolve("Hello, World!");
        }, 2000);
    });

    myPromise
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

export default Mypromises;