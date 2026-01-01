export function dateAndTime() {

    let newDate = new Date()

    // console.log("toString() - ", newDate.toString());
    // console.log("toLocaleString() - ", newDate.toLocaleString());
    // console.log("toDateString() - ", newDate.toDateString());
    // console.log("typeof date - ",typeof newDate);


    // let myCreatedDate = new Date(2025,2,25)
    // let myCreatedDate = new Date(2025,2,25)
    // console.log(myCreatedDate.toString());
    // console.log(myCreatedDate.toDateString());


    let myCreatedDate = new Date(2025, 2, 25, 6, 15)
    // console.log(myCreatedDate.toLocaleString());

    let myTimeStap = Date.now()

    // console.log(myTimeStap);
    // console.log(myCreatedDate.getTime());
    // console.log(Math.floor(Date.now()/1000));


    console.log(newDate);
    console.log('Month Number -', newDate.getMonth() + 1);
    console.log('Day Number -', newDate.getDay());


    let weekday = newDate.toLocaleString('default', {
        weekday: "long"
    })

    console.log(weekday);
}