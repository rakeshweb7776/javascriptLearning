export function whileLoop() {

  const month = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // While Loop
  // let index = 0
  // while (index <= 10) {
  //     console.log(`Value of index is ${index}`);
  //     index++
  // }


  // While Loop
  let index = 0
  while (index < month.length) {
    // console.log(index);
    // console.log(`Month name is ${month[index]}`);
    index = index + 1
  }

  //Do While Loop
  let score = 11
  do {
    //   console.log(`Score is ${score}`);
    score++
  } while (score <= 10);


  // For of loop
  for (const monthName of month) {
    //  console.log(monthName);
  }

  // Maps

  const map = new Map()
  map.set('In', "India")
  map.set('USA', "United State of Amefica")
  map.set('In', "India")

  for (const [key, value] of map) {
   // console.log(key, ":-", value);
  }

  const myObj = {
    game1: 'NFS1',
    game2: 'NFS2',
    game3: 'NFS3'
  }

  // we can not do like this it will not work
  // for (const [key, value] of myObj) {
  //   console.log(key, ":-", value);
  // }




  // For In Loop
  const myLeng = {
    js: 'Javascript',
    php: 'PHP lang',
    html: 'Hypertext Markup Language'
  }

  // for in loop for Object
  for (const key in myLeng) {
  //  console.log(`${key} shortcut is for ${myLeng[key]}`);
  }


  // for in loop for Array
  for (const key in month) {
   // console.log(month[key]);
  }

  for (const key in map) {
    console.log(key);
  }
}