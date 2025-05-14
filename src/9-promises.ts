const Mypromises = () => {

    // Creating a new Promise
    // using resolve and reject

    const myPromise = new Promise((resolve, reject) => {
        const success = true; // Simulating success or failure
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    });

    // Using the Promise
    myPromise
        .then((message) => {
            console.log(message); // This will run if the promise is resolved
        })
        .catch((error) => {
            console.error(error); // This will run if the promise is rejected
        });


    // Fetching data from an API using Promises
    // in an api to fetch data from an api using promises to resolve or reject i.e https://dummyjson.com/posts

    const fetchPosts = () => {
        return new Promise((resolve, reject) => {
            fetch('https://dummyjson.com/posts')
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.json();
                })
                .then(data => resolve(data.posts))// resolves means that the data is fetched successfully
                .catch(error => reject(error)); // rejects means that there is an error in fetching the data
        });
    }

    fetchPosts()
    // .then(posts => {
    //     console.log("Fetched posts:", posts);
    // })
    // .catch(error => {
    //     console.error("Error fetching posts:", error);
    // });





}

export default Mypromises;