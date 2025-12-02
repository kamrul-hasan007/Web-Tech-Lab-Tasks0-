
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});


const greeting = document.getElementById('greeting');
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let text = 'Hello';

    if(hour < 12) text = 'Good Morning';
    else if(hour < 18) text = 'Good Afternoon';
    else text = 'Good Evening';

    greeting.textContent = text;
}
updateGreeting();
setInterval(updateGreeting, 60000); 

const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.section;

        sections.forEach(section => {
            if(section.id === target) section.classList.add('active-section');
            else section.classList.remove('active-section');
        });
    });
});


const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if(name.value.trim() === "") {
        nameError.textContent = "Name cannot be empty";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    } else {
        emailError.textContent = "";
    }


    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if(message.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    if(valid) {
        alert("Message sent successfully!");
        form.reset();
    }
});
