export function objects_1() {

    // singleton
    // Object.create();

    // object literals

    const mySym = Symbol("key1")

    const JsUser = {
        [mySym]: "mykey1", // to set symbol this way in obj as key
        name: "Rakesh",
        age: 38,
        email: "rakesh@gmail.com",
        location: "Jaipur",
        isLoggedIn: false,
        lastLoginDays: ["Monday", "Saturday"]
    }

    console.log("Get Name - ", JsUser.name); // type one to get object data
    console.log("Get Name - ", JsUser["name"]); // type tow to get object data
    console.log(JsUser[mySym]); // to get symbol this way


    // JsUser.email = "newRakesh@gmail.com"
    // Object.freeze(JsUser) // by this we can freeze object now we can't update any value in this obj
    // // JsUser.email = "otherEmail@gmail.com"
    // console.log(JsUser);


    JsUser.greeting = function () {
        return "Hello Js User"
    }

    JsUser.greetingTwo = function () {
        return `Hello Js User ${this.name}`
    }
    console.log(JsUser.greeting());
    console.log(JsUser.greetingTwo());

}