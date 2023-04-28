const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#repeat-password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (username.value === '') {
    showError(username, 'không được để trống');
  } else {
    showSuccess(username);
  }
  
  if (email.value === '') {
    showError(email, 'không được để trống');
  } else {
    showSuccess(email);
  }
  
  if (phone.value === '') {
    showError(phone, 'không được để trống');
  } else {
    showSuccess(phone);
  }
  
  if (password.value === '') {
    showError(password, 'không được để trống');
  } else {
    showSuccess(password);
  }
  
  if (repeatPassword.value === '') {
    showError(repeatPassword, 'không được để trống');
  } else if (repeatPassword.value !== password.value) {
    showError(repeatPassword, 'không được để trống');
  } else {
    showSuccess(repeatPassword);
  }
});

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'error';
  const error = formControl.querySelector('.error');
  error.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'success';
}
