export function dataTypeSummary() {

    // Primitive Data Types
    // 7 Types : String, Number, Boolean, null, undefined, Symbol, bigInt


    const score = 100
    const scoreValue = 100.3

    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;

    const id = Symbol('123')
    const anotherId = Symbol('123')

    console.log(id === anotherId)


    const bigNumber = 656323565845457986546131656n

    console.log(typeof bigNumber)


    // Refrence Type (Non Primitive)
    // Array, Objects, Functions

    /* Array */
    const heros = ['shaktiman', 'naagraj', 'doga']
    console.log(heros);
    console.log("heros - ",typeof heros);


    /* Object */
    let myObject = {
        name: "Rakesh Pawar",
        age: 38,
        email: "rakesh@gmail.com"
    }
    console.log(myObject);
    console.log("myObject - ",typeof myObject);


    /* Functions */
    const myFunction = function () {
        console.log("Hello World");
    }
    myFunction()
    console.log("myFunction - ",typeof myFunction);



}