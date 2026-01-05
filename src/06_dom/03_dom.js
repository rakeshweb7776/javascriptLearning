export function dom_3() {


    const div = document.createElement('div')
    div.className = "main"
    div.id = "mainElement"
    div.setAttribute('title', "General Title Testing")
    div.style.background = "yellow"
    div.style.padding = "12px"

    // div.innerText = "Chai aur code"


    const addText = document.createTextNode("Chai aur code")
    div.appendChild(addText)

    console.log(div);

    document.querySelector('.parent').appendChild(div)




    function addLanguage(language) {
        const li = document.createElement('li')
        li.innerHTML = `${language}`
        document.querySelector('.language').appendChild(li)
    }
    // addLanguage("PHP")
    // addLanguage("HTML")




    function addOptionLeng(langName) {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }

    // addOptionLeng('JSON')
    // addOptionLeng('Fire Base')
    // addOptionLeng('Go lang')


    /* Add language child using form input and button */
    document.getElementById('submitBtn').addEventListener('click', function () {
        const lengName = document.getElementById('langInput').value;
        addOptionLeng(lengName);
        document.getElementById('langInput').value = "";
    });

    const input = document.getElementById('langInput');
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addOptionLeng(this.value);
            this.value = ""
        }
    });



    // Edit
    const secondLeng = document.querySelector("li:nth-child(2)")
    // secondLeng.innerHTML = "Mojo";
    const newLi = document.createElement('li')
    newLi.textContent = "Testing Leng"

    secondLeng.replaceWith(newLi)


    // remove
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove()

}