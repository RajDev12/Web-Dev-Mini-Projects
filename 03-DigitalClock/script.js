const clock = document.getElementById('clock');

clock.innerText = new Date().toLocaleTimeString();

// update the clock every second

setInterval(() => {
    clock.innerText = new Date().toLocaleTimeString();
}, 3000)