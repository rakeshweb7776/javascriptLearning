export function event_02() {

    document.querySelector("#app").innerHTML = `
    <h1 style="color:#000;">Press Start Button</h1>
    <button style="border:1px solid;" id="start">Start</button>
    <button style="border:1px solid;" id="stop">Stop</button>
    `

    // Generate Random Color 
    const rendomColor = function () {
        const hex = "0123456789ABCDEF"
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)]
        }
        return color;
    }

    let intevalId;

    document.querySelector('#start').addEventListener('click', function () {

        if (!intevalId) {
            intevalId = setInterval(setHeding, 500);
        }

        function setHeding() {
            const rendomNum = Math.floor(Math.random() * 16)
            document.querySelector('h1').innerHTML = `Hi Rakesh Good. $${rendomNum}`
            document.querySelector('h1').style.color = "#ffffff"
            // Setting Rendom Color To Body Tag

            const gradientStyle = `linear-gradient(45deg, ${rendomColor()}, ${rendomColor()})`;
            document.querySelector('body').style.background = gradientStyle;

        };
        console.log("STARTED");
    })

    document.querySelector('#stop').addEventListener('click', function () {
        clearTimeout(intevalId);
        intevalId = null;
        console.log("STOP");
        document.querySelector('h1').innerHTML = `Press Start Button`
    })

}