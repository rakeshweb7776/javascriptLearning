export function array() {

    const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const myHeros = ["shaktiman", "naagraj"]

    const myArr2 = new Array(6, 7, 8, 9)

    // console.log(myArr2);

    // Array methods

    myArr.push(5) // add value at last in arr
    myArr.push(20) // add value at last in arr
    myArr.pop() // remove last value of arr

    myArr.unshift(9) // add value at first in arr
    myArr.shift() // remove first value of arr



    // console.log(myArr.includes(5)); //  it return boolean true or false
    // console.log(myArr.indexOf(50)); // if value exist it return index if not it return -1 for any value


    // console.log(myArr);

    // Slice and Splice

    console.log("A - ", myArr);

    const myn1 = myArr.slice(1, 4)
    console.log("B - ", myArr);
    console.log(myn1);

    const myn2 = myArr.splice(0, 3)
    console.log("C - ", myArr);
    console.log(myn2);
}