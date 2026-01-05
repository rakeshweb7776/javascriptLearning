export function color_change() {

    document.querySelector('#app').innerHTML = `
        <h3>Click to change body color<h3>
        <div id="buttons">
            <button class="button" id="gray" style="background:gray;width:160px;height:60px;border:2px solid;margin:5px;"></button>
            <button class="button" id="white" style="background:white;width:160px;height:60px;border:2px solid;margin:5px;"></button>
            <button class="button" id="blue" style="background:blue;width:160px;height:60px;border:2px solid;margin:5px;"></button>
            <button class="button" id="yellow" style="background:yellow;width:160px;height:60px;border:2px solid;margin:5px;"></button>
            <button class="button" id="purple" style="background:purple;width:160px;height:60px;border:2px solid;margin:5px;"></button>
            <button class="button" id="lightsalmon" style="background:lightsalmon;width:160px;height:60px;border:2px solid;margin:5px;"></button>
        </div>
    `

    const buttons = document.querySelectorAll('.button')
    const body = document.querySelector('body')

    buttons.forEach((button) => {       
        
        button.addEventListener('click', function (e) {
            console.log(e.target.id);
            const selectedColor = e.target.id
            
            body.style.backgroundColor = selectedColor
            button.innerHTML = selectedColor
        });

    })

}