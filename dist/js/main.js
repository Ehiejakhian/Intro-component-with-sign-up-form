
let firstName = document.querySelector('.first-name input');
let lastName = document.querySelector('.last-name input');
let email = document.querySelector('.email input');
let password = document.querySelector('.password input');

let firstNameError = document.querySelector('.first-name .error-message');
let lastNameError = document.querySelector('.last-name .error-message');
let emailError = document.querySelector('.email .error-message');
let passwordError = document.querySelector('.password .error-message');

let submitBtn = document.querySelector('.sign-up-button');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Validate inputs
  if (!firstName.value) {
    firstNameError.textContent = 'First Name cannot be empty';
    firstName.classList.add('focused');
  } else {
    firstNameError.textContent = '';
    firstName.classList.remove('focused');
  }

  if (!lastName.value) {
    lastNameError.textContent = 'Last Name cannot be empty';
    lastName.classList.add('focused');
  } else {
    lastNameError.textContent = '';
    lastName.classList.remove('focused');
  }

  if (!email.value) {
    emailError.textContent = 'Email cannot be empty';
    email.classList.add('focused');
  } else if (!isValidEmail(email.value)) {
    email.classList.add('focused');
    emailError.textContent = 'Looks like this is not an email';
  } else {
    emailError.textContent = '';
    email.classList.remove('focused');
  }

  if (password.value === '') {
    passwordError.textContent = 'Password cannot be empty';
    password.classList.add('focused');
  } else {
    passwordError.textContent = '';
    password.classList.remove('focused');
  }
});

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}