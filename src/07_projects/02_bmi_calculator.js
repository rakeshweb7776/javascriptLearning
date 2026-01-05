export function bmi_calculator() {

    document.querySelector('#app').innerHTML = `

        <h3>BMI Calculator<h3>
        <form>
            <p>
                <label>height in CM : </label>
                <input id="height" />
            </p>
            <p>
                <label>Weight in KG : </label>
                <input id="weight" />
            </p>
            <button type="submit" id="calculateBmi" style="background:gray;border:2px solid;margin:5px;color:#ffffff;">Calculate BMI</button>            
            <div id="result"></div>
            <div id="bmiGuide"></div>
        </form>
        `


    const form = document.querySelector('form')
    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const height = parseInt(document.querySelector('#height').value)
        const weight = parseInt(document.querySelector('#weight').value)
        const result = document.querySelector('#result')
        const bmiGuide = document.querySelector('#bmiGuide')

        result.innerHTML = ``;
        bmiGuide.innerHTML = ``;


        if (height === '' || height <= 0 || isNaN(height)) {
            result.innerHTML = `Please give a valid height ${height}`;
        } else if (weight === '' || weight <= 0 || isNaN(weight)) {
            result.innerHTML = `Please give a valid weight ${weight}`;
        } else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2)
            result.innerHTML = `Your BMI is ${bmi}`;

            if (bmi >= 24.9) {
                bmiGuide.innerHTML = `Over Weight = Greter then 24.9`;
            } else if (bmi > 18.6 || bmi < 24.9) {
                bmiGuide.innerHTML = `Normal Range = 18.6 and 24.9`;
            } else if (bmi <= 18.6) {
                bmiGuide.innerHTML = `Under Weight = Less then 18.6`;
            }
        }

    });


}