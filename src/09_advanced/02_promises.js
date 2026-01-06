export function promises() {

    const promiseOne = new Promise(function (resolve, reject) {
        // Do an async task
        setTimeout(function () {
            console.log("Async task is completed");
            resolve()
        }, 1000)
    })

    promiseOne.then(function () {
        console.log("promise consumed");

    })


    new Promise(function (resolve, reject) {
        // Do an async task
        setTimeout(function () {
            console.log("Async task is completed 2");
            resolve()
        }, 1000)
    }).then(function () {
        console.log("promise consumed 2");

    })


    const promiseThree = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Async task is completed three");
            resolve({ username: "Rakesh", email: "rakesh@gmail.com" })
        }, 1000)
    })

    promiseThree.then(function (user) {
        console.log(`promise consumed ${user.username}`);
    })


    const promiseFour = new Promise(function (resolve, reject) {
        setTimeout(function () {
            // console.log("Async task is completed Four");
            let error = false;
            if (!error) {
                resolve({ username: "Rakesh", email: "rakesh@gmail.com" })
            } else {
                reject("Error: Something went wrong")
            }
        }, 1000)
    })

    promiseFour.then((user) => {
        return user
    }).then((user) => {
        console.log(user);
    }).catch(function (error) {
        console.log(error);
    }).finally(() => {
        console.log("The promise is either resolved or rejected");
    })



    const promiseFive = new Promise((resolve, reject) => {
        setTimeout(function () {
            // console.log("Async task is completed Four");
            let error = true;
            if (!error) {
                resolve({ username: "Rakesh 5", email: "rakesh@5555gmail.com" })
            } else {
                reject("Error: Something went wrong FIVE")
            }
        }, 1000)
    });


    async function consumePromiseFive() {
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    consumePromiseFive()

    async function getAllUsers() {
        try {
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    // getAllUsers()


    fetch('https://dummyjson.com/users')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);

        })
        .catch((error) => console.log(error))

}