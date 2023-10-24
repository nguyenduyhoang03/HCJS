let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirm_password').value;

  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Vui lòng điền đầy đủ thông tin');
  } else if (password !== confirmPassword) {
    alert('Mật khẩu không khớp');
  } else {
    alert('Đăng ký thành công');
    form.reset();
  }
});
