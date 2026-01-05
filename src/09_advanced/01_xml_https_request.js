export function xml_https_request() {


    // Clear existing content first
    document.querySelector('#app').innerHTML = '';

    const createUserCard = function (userData) {

        const card = document.createElement('div')
        card.className = "main"
        card.id = "mainElement"
        card.setAttribute('title', "General Title Testing")
        card.style.background = "#f8f8f8"
        card.style.padding = "12px"
        card.style.border = "1px solid"
        card.style.width = "200px"

        const cardImge = document.createElement('img')
        cardImge.src = userData.image
        card.appendChild(cardImge)

        const cardTitle = document.createElement('h3')
        cardTitle.textContent = `${userData.firstName} ${userData.maidenName} ${userData.lastName}`
        card.appendChild(cardTitle)

        const cardSubTitle = document.createElement('h6')
        cardSubTitle.textContent = `DOB - ${userData.birthDate}`
        card.appendChild(cardSubTitle)

        const cardEmail = document.createElement('h6')
        cardEmail.textContent = `Email - ${userData.email}`
        card.appendChild(cardEmail)


        const cardAge = document.createElement('h6')
        cardAge.textContent = `Age - ${userData.age}`
        card.appendChild(cardAge)

        const cardGender = document.createElement('h6')
        cardGender.textContent = `Gender - ${userData.gender}`
        card.appendChild(cardGender)

        // Then append new content
        document.querySelector('#app').append(card);

    }


    const requestUrl = 'https://dummyjson.com/users?limit=1';
    const xhr = new XMLHttpRequest();

    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);

        if (xhr.readyState === 4) {

            const data = JSON.parse(this.responseText)

            console.log(data.users[0]);

            createUserCard(data.users[0])
        }

    }
    xhr.send(); 

}