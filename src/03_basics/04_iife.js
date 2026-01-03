export function iife() {

    // Named IIFE
    (function dbConnection(name) {
        console.log(`DB Connected - ${name}`);
    })("Data Base 1");


    // Unamed IIFE
    ((name) => {
        console.log(`DB Connected - ${name}`);
    })("Data Base 2")

}