export function digital_watch() {

    document.querySelector('#app').innerHTML = `

        <h3 style="margin:0;">Digital Watch</h3>
        <h5 style="margin:3px 0;">Your Local Time</h5>
        <div id="digitalWath" style="background:#d59c17;border:2px solid;margin:0 5px;color:#ffffff;width:200px;padding:15px;border-radius:15px;font-size:21px;font-weight:bold;"></div>
        `
        
    const digitalWath = document.querySelector('#digitalWath')

    setInterval(function () {
        let date = new Date();
        let currTime = date.toLocaleTimeString("en-US");
        digitalWath.innerHTML = currTime;
    }, 1000)

}