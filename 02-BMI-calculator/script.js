//extract the values from input
// const height = document.getElementById('height').value;
// const weight = document.getElementById('weight').value;
//above two line of code will extract the empty values cuz script is invoked at the time of page loading
//we want the values when the user enter the submit button

// function bmi() {
//     const height = document.getElementById('height').value;
//     const weight = document.getElementById('weight').value;
//     const bmi = weight / ((height / 100) ** 2)
//     return bmi;
// }
// // console.log(bmi(172, 52));
// const results = document.getElementById('results');
// results.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const bmiValue = bmi();
//     results.innerHTML = bmiValue;
// })


// const form = document.getElementById('form'); //doesnt work
const form = document.querySelector('form');
form.addEventListener('submit', function (e){
    e.preventDefault(); //prevents submits

    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)
    const results =document.getElementById('results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter valid height ${height} `
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter valid weight ${weight} `
    } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerText = `Your BMI is ${bmi}`;
    }
})

//based on the result show the category of BMI i.e underweight or overweight or normal




// const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });

