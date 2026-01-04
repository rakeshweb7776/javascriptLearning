export function dom_2() {


const div = document.createElement('div')
div.className = "main"
div.id = "mainElement"
div.setAttribute('title',"General Title Testing")
div.style.background = "yellow"
div.style.padding = "12px"

// div.innerText = "Chai aur code"


const addText = document.createTextNode("Chai aur code")
div.appendChild(addText)

console.log(div);

document.querySelector('.parent').appendChild(div)


    
}