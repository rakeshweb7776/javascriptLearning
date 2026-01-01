export function array_2() {

    const marvel_heros = ["thor", "Ironman", "spiderman"]
    const dc_heros = ["superman", "flash", "batman"]

    // marvel_heros.push(dc_heros)

    /* concat function */
    // console.log(marvel_heros);
    // const allHeros = marvel_heros.concat(dc_heros) // concat function use to join 2 array
    // console.log(allHeros);


    /* Spread Oprators */
    // const all_new_heros = [...marvel_heros, ...dc_heros]
    // console.log(all_new_heros);


    /* Flat method */
    // const another_array = [1,2,3,[4,5,6],7,[6,7,[40,50]]]
    // console.log(another_array);

    // const real_another_array = another_array.flat(4) // we need to pass level like 1 - 4 or we can pass Infinity it will tak automatically nested levels
    // console.log(real_another_array);


    console.log(Array.isArray('Rakesh'));

    let arrObj = {
        name:"Rakesh",
        email:"rakesh@gmail.com"
    }
    console.log(Array.from(arrObj)); // Intresting - it return empty array because for that type of opration we need to specify that what type of array we want like key or value 


    let score1 = 100
    let score2 = 200
    let score3 = 300

console.log(Array.of(score1,score2,score3));




}