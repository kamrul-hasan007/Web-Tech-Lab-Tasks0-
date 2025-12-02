const clock = document.getElementById('clock');

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    
    hours = hours % 12;
    hours = hours ? hours : 12;

    
    const strHours = hours.toString().padStart(2, '0');
    const strMinutes = minutes.toString().padStart(2, '0');
    const strSeconds = seconds.toString().padStart(2, '0');

    clock.textContent = `${strHours}:${strMinutes}:${strSeconds} ${ampm}`;
}


updateClock();


setInterval(updateClock, 1000);
