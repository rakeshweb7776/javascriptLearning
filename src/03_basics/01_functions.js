export function function_1() {

    function addTwoValue(num1, num2) {
        return num1 + num2
    }
    const result = addTwoValue(6, 9);
    // console.log("Result :", result);

    function userLoginMessage(userName) {
        /* if(userName === undefined) */
        if (!userName) {
            return `Please enter username`
        }
        return `${userName} is loggedIn now`
    }

    const loginUserMessage = userLoginMessage();
    // console.log(loginUserMessage);


    function calculateCartPrice(val1, val2, ...num1) {
        // if we recive only ...num1 rest it will return all the values in a single array.
        // but if we recive multiple paramiters like above it will devide into those value and after all the value will recive in ...num1.
        return num1
    }
    //console.log(calculateCartPrice(200, 500, 600, 2000))




    // pass objects and array in a function
    const user = {
        username: "Rakesh",
        price:199
    }

    function handleObject(anyobject) {
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    }


    handleObject(user)

}