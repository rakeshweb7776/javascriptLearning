export function string() {

    const name = "Rakesh"
    const repoCount = 50

    // console.log(name, repoCount);
    console.log(`My name is ${name.toLocaleUpperCase()} and my repo count is ${repoCount}`)


    const gameName = new String('Rakesh');

    console.log(gameName[0]);
    console.log(gameName.__proto__);


    console.log('gameLength', gameName.length);
    console.log(gameName.toLocaleUpperCase());
    console.log(gameName.charAt(0));
    console.log(gameName.indexOf('k'));

    const newString = gameName.substring(0, 4);
    console.log(newString);

    const anotherString = gameName.slice(-6, 3)
    console.log(anotherString);

    const newStringOne = "    Rakesh Pawar    ";
    console.log(newStringOne);
    console.log(newStringOne.trim());


    const url = "https://rakesh.com/rakesh%20pawar"
    console.log(url.replace('%20','-'));

    console.log(url.includes('.com'));

    const splitString = "rakesh-pawar-react"
    console.log(splitString.split('-'));

}