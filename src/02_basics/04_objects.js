export function objects_2() {

    const userObject = {
        id: 1,
        name: "Rakesh Pawar",
        email: "rakesh@gmail.com",
        location: "jaipur",
        isLoggedIn: true
    }


    const obj1 = { a: 1, b: 2 }
    const obj2 = { c: 3, d: 4 }
    const obj3 = { e: 5, f: 6 }

    // const margedObj = Object.assign({}, obj1, obj2, obj3)
    const margedObj = { ...obj1, ...obj2, ...obj3 }

    // console.log(margedObj);

    const users = [
        {
            id: 1,
            email: "useremail@gmail.com"
        },
        {
            id: 2,
            email: "useremail@gmail.com"
        },
        {
            id: 3,
            email: "useremail@gmail.com"
        }
    ]

    // console.log(users[1].email);

    console.log(Object.keys(userObject)); // to get obj keys
    console.log(Object.values(userObject)); // to get obj values 
    console.log(Object.entries(userObject)); // to get data entries but it uses very less


    console.log(userObject.hasOwnProperty("isLoggedIn")) // to check key exist or not



    /* Destructuring in Javascript */

    const course = {
        courseName: "Javascript",
        price: 999,
        courseInstructor: "Hitesh"
    }

    const { courseName, courseInstructor, price } = course
    console.log(courseName);
    console.log(price);
    console.log(courseInstructor);


    // Json Formats
    [
        {},
        {},
        {}
    ]


}