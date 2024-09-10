const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const counsellingType = document.getElementById('counselling-type').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Simple validation
    if (!name || !email || !counsellingType || !date || !time) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission (you would normally send this data to your server)
    const message = `Appointment booked successfully! \nName: ${name} \nEmail: ${email} \nCounselling Type: ${counsellingType} \nDate: ${date} \nTime: ${time}`;
    document.getElementById('message').innerText = message;

    // Reset the form
    document.getElementById('booking-form').reset();
});