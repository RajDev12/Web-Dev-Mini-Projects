const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//using arrow function in event listener

buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'grey';
        } else if (e.target.id === 'white') {
            body.style.backgroundColor = 'white'
        } else if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue'
        } else {
            body.style.backgroundColor = 'yellow'
        }

    })
})

// buttons.forEach(function (button) {
//     console.log(button)
//     button.addEventListener('click', function (e) {
//         console.log(e) //click on a button and check the console
//         console.log(e.target)
//         if (e.target.id === 'grey') {
//             body.style.backgroundColor = 'grey';
//         } else if (e.target.id === 'white') {
//             body.style.backgroundColor = 'white'
//         } else if (e.target.id === 'blue') {
//             body.style.backgroundColor = 'blue'
//         } else {
//             body.style.backgroundColor = 'yellow'
//         }

//     })

// })

