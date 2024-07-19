const form = document.querySelector('form');

form.addEventListener('submit', function(evt){
    evt.preventDefault();

    const height = parseFloat(document.querySelector('#heights').value);
    const weight = parseFloat(document.querySelector('#weights').value);
    const result = document.querySelector('#result');

    if (height <= 0 || isNaN(height)) {
        result.innerHTML = "Please give valid height";
    } else if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = "Please give valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = ` <span> Your BMI is ${bmi} </span>`;
    }
});
