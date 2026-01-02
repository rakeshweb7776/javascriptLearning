export function scope_1() {

    // Global Scope and Local Scope

    // Global Scope
    let a = 10
    const b = 30
    var c = 40 // we are not using var because we can access every where on file so it make conflicts.

    if (true) {
        // Local Scope
        let a = 50
        const b = 20
        // console.log(20);
    }
    // console.log(a);



    function one() {
        const username = "Rakesh"
        function two() {
            const websiteName = "youtube"
            console.log(`Username is ${username} and website is ${websiteName}`);
        }
        two()
        // console.log(websiteName);
    }
    one()


    if (true) {
        const user = "Rakesh"
        if (user === "Rakesh") {
            const website = "youtube"
            console.log(`Username is ${user} and website is ${website}`);
        }
        // console.log(website); // out of scope
    }
    // console.log(user); // out of scope



    addone(5) // this type of function is we can call
    function addone(num) {
        return num + 1
    }

    addVal(5) // if we contain function in a variable then we can not call it like this.
    const addVal = function(num){
        return num + 1
    }




}