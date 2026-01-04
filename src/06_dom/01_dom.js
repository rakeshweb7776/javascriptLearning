export function dom_1() {

 const parent = document.querySelector('.parent')
//  console.log(parent);
//  console.log(parent.children[1].innerHTML);

 for (let i = 0; i < parent.children.length; i++) {
    const element = parent.children[i].innerHTML;
    // console.log(element);
 }

 parent.children[1].style.color = "orange"
 parent.children[1].style.fontWeight = "bold"
 parent.children[1].style.background = "black"

//  console.log(parent.firstElementChild);
//  console.log(parent.lastElementChild);



const dayOne = document.querySelector('.day')
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);


// console.log("Nodes: ", parent.childNodes);
}