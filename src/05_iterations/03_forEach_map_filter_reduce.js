export function forEach_map_filter_reduce() {

    const month = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Foreach Loop

    month.forEach(function (val) {
        //console.log(val);
    })

    month.forEach(element => {
        // console.log(element);
    });

    month.forEach((item) => {
        //console.log(item);
    })

    function printMe(item) {
        // console.log(item);
    }

    // month.forEach(printMe)


    month.forEach((item, index, arr) => {
        //  console.log(item, index, arr);
    })


    const languages = [
        { title: "JavaScript", lang: "js" },
        { title: "Python", lang: "py" },
        { title: "TypeScript", lang: "ts" },
        { title: "Java", lang: "java" },
        { title: "C++", lang: "cpp" }
    ]

    languages.forEach((item) => {
        // console.log(item.title);
    })


    /* -------------------------------------------------------------------- */
    // Filter
    /* -------------------------------------------------------------------- */


    const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    // if we add { } Scope we need to write return 
    const getNums_1 = myNums.filter((num, index, arr) => {
        return num > 4 && num < 10
    })
    // console.log(getNums_1);

    // if we do not use { } scope we do not need to write return
    const getNums_2 = myNums.filter((num, index, arr) => num > 4 && num < 10)
    // console.log(getNums_2);

    // we can add ( ) for conditions 
    const getNums_3 = myNums.filter((num, index, arr) => (num > 4 && num < 10))
    //console.log(getNums_3);


    const books = [
        { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960, edition: 2020 },
        { title: "1984", genre: "Dystopian", publish: 1949, edition: 2017 },
        { title: "The Great Gatsby", genre: "Classic", publish: 1925, edition: 2021 },
        { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997, edition: 2018 },
        { title: "The Hobbit", genre: "Fantasy", publish: 1937, edition: 2015 },
        { title: "Pride and Prejudice", genre: "Romance", publish: 1813, edition: 2019 },
        { title: "The Catcher in the Rye", genre: "Fiction", publish: 1951, edition: 2014 },
        { title: "The Lord of the Rings", genre: "Fantasy", publish: 1954, edition: 2020 },
        { title: "Animal Farm", genre: "Political Satire", publish: 1945, edition: 2016 },
        { title: "Brave New World", genre: "Dystopian", publish: 1932, edition: 2022 }
    ];

    // const getBooks = books.filter((book, index, arr) => book.publish <= 1954)    

    // const getBooks = books.filter((book, index, arr) => book.edition >= 2000)  

    const getBooks = books.filter((book, index, arr) => book.genre === "Fantasy" && book.edition >= 1954)
    // console.log(getBooks);


    /* -------------------------------------------------------------------- */
    // Map
    /* -------------------------------------------------------------------- */

    const getNumbers = myNums
        .map((num, index, arr) => (num * 10))
        .map((num) => (num + 22))
        .filter((num) => (num >= 92))
    //console.log(getNumbers);


    /* -------------------------------------------------------------------- */
    // Reduce
    /* -------------------------------------------------------------------- */

    const cartItems = [
        { id: 101, name: "iPhone 15", price: 1000, quantity: 1, inStock: true },
        { id: 102, name: "MacBook Pro", price: 1000, quantity: 3, inStock: true },
        { id: 103, name: "AirPods Pro", price: 500, quantity: 2, inStock: true },
        { id: 104, name: "iPad Air", price: 5000, quantity: 3, inStock: false },
        { id: 105, name: "Apple Watch", price: 500, quantity: 1, inStock: true }
    ];


    const getCartTotal = cartItems.reduce((acc, cartItem, arr) => {
        console.log(`Item Price :- ${cartItem.price} ---- Item Qty :- ${cartItem.quantity} ${cartItem.price * cartItem.quantity}`);
        let cartData = {
            totalPrice: acc.totalPrice + (cartItem.price * cartItem.quantity),
            totalItem: acc.totalItem + cartItem.quantity
        }
        return cartData
    }, { totalPrice: 0, totalItem: 0 })
    
    console.log(getCartTotal);

}