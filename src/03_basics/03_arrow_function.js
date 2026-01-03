export function arrow_function() {


    // Call a function from object 
    const user = {
        username: "rakesh",
        price: 999,
        welcomeMessage: function () {
            console.log(`${this.username},Welcome to website`);
        }
    }

    // user.welcomeMessage()
    // user.username = "Hitesh"
    // user.welcomeMessage()


    // function checkThis(){
    //     let username = "hitesh"
    //     console.log(this.username)
    // }
    // checkThis()


    // const checkThis = function() {
    //     let username = "hitesh"
    //     console.log(this.username)
    // }
    // checkThis()


    // const checkThis = () => {
    //     let userData = {
    //         name:"rakesh",
    //         email:"rakesh@gmail.com"
    //     }
    // }

    // checkThis()


    // const addTwo = (num1, num2) => {
    //     return num1 + num2 // Explicit returns
    // }
    
    
    const addTwo = (num1, num2) => (num1 + num2)  // Implicit returns

    console.log(addTwo(4, 5))
    



}