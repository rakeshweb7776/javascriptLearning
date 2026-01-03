export function whileLoop() {

  // let index = 0
  // while (index <= 10) {
  //     console.log(`Value of index is ${index}`);
  //     index++
  // }

  const month = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  let index = 0
  while (index < month.length) {
    // console.log(index);
    // console.log(`Month name is ${month[index]}`);
    index = index + 1
  }
}


let score = 11
do {
  console.log(`Score is ${score}`);
  score++
} while (score <= 10);