const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    validateForm();
});

function validateForm() {
    let isValid = true;

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    [firstName, lastName, email, message].forEach(input => {
        input.style.borderColor = '#ccc';
    });

    if (firstName.value.trim() === '') {
        firstName.style.borderColor = 'red';
        isValid = false;
    }

    if (lastName.value.trim() === '') {
        lastName.style.borderColor = 'red';
        isValid = false;
    }

    if (email.value.trim() === '' || !email.value.includes('@')) {
        email.style.borderColor = 'red';
        isValid = false;
    }

    if (message.value.trim() === '') {
        message.style.borderColor = 'red';
        isValid = false;
    }

    
    const queryType = document.querySelector('input[name="query-type"]:checked');
    const radioLabels = document.querySelectorAll('.radio-group label');
    radioLabels.forEach(label => label.style.borderColor = '#ccc');

    if (!queryType) {
        radioLabels.forEach(label => label.style.borderColor = 'red');
        isValid = false;
    }

    const consent = document.querySelector('.checkbox input[type="checkbox"]');
    const checkboxLabel = document.querySelector('.checkbox');
    checkboxLabel.style.borderColor = 'transparent';

    if (!consent.checked) {
        checkboxLabel.style.border = '1px solid red';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
        radioLabels.forEach(label => label.classList.remove('selected'));
    }
}
