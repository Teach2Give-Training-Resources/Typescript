
// Step 1:  
const genericTypes = () => {

    type ApiResponse = {
        data: any;
        isError: boolean;
    }

    //in this case data will be of type any
    // but we can use generics to make it more specific
    const response: ApiResponse = {
        data: {
            name: 'John Doe',
            age: 30,
        },
        isError: false,
    }


    //Step 2:  We can use generics to make it more specific
    type ApiResponse1<Data> = {
        data: Data;
        isError: boolean;
    }

    // const response1: ApiResponse1<{ name: string; age: number; }> = {
    //     data: {
    //         name: 'John Doe',
    //         age: 30,
    //     },
    //     isError: false,
    // }

    //make it easier to read by creating a type alias
    type UserResponse = ApiResponse1<{ name: string; age: number; }>

    const response1: UserResponse = {
        data: {
            name: 'John Doe',
            age: 30,
        },
        isError: false,
    }

    //Step 3: it becomes more easy when I have another response i.e BlogResponse
    type BlogResponse = ApiResponse1<{ title: string; content: string; }>

    const response2: BlogResponse = {
        data: {
            title: 'My first blog',
            content: 'This is my first blog post',
        },
        isError: false,
    }

}

export default genericTypes;