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
        console.log(20);

    }
    console.log(a);


}