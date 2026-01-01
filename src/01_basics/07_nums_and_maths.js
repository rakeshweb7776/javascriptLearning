export function numsAndMaths() {

    const score = 400
    // console.log(score);

    const balance = new Number(100)
    // console.log(balance);

    // console.log(balance.toString().length);
    // console.log(balance.toFixed(1));/

    const otherNumber = 1123.8956
    // console.log(otherNumber.toPrecision(4));

    const hundreds = 1000000
    // console.log(hundreds.toLocaleString('en-IN'));


    /* +++++++++++++++++++ Maths ++++++++++++++++++++ */

    // console.log(Math);
    // console.log("abs", Math.abs(-4));
    // console.log("round it makes single digit roundup number", Math.round(4.3));
    // console.log("ceil it makes roundup upper side", Math.ceil(4.2));
    // console.log("floor it makes roundup lower side", Math.floor(4.9));
    // console.log("Get Max Value", Math.max(2, 5, 6, 8, 12));
    // console.log("Get Min Value", Math.min(2, 5, 6, 8, 12));


    // console.log(Math.random());
    // console.log(Math.random()*10 + 1);
    // console.log(Math.floor(Math.random()*10 + 1));

    /* To Get Rendom Number within Min and Max number range */
    const min = 20
    const max = 30
    console.log(Math.floor(Math.floor(Math.random() * (max - min + 1))) + min)



}