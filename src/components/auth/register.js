import './components/css/login.css';

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const registerButton = document.getElementById('registerButton');

  let moveToRight = true;

  registerButton.addEventListener('mouseover', () => {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(email) || !validateUsername(username) || !validatePassword(password)) {
      moveButton();
    }
  });

  registerButton.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (validateEmail(email) && validateUsername(username) && validatePassword(password)) {
      const hashedPassword = md5(password);
      localStorage.setItem(email, JSON.stringify({ email, password: hashedPassword }));
      alert('Registration successful! You can now log in.');
      registerForm.reset();
    } else {
      alert('Please fill in all fields correctly.');
    }
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }

  function validateUsername(username) {
    return username.length >= 3 && username.length <= 15;
  }

  function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number
    return re.test(password);
  }

  function moveButton() {
    if (moveToRight) {
      registerButton.style.transform = 'translateX(150%)';
    } else {
      registerButton.style.transform = 'translateX(0)';
    }
    moveToRight = !moveToRight;
  }

  function md5(string) {
    return CryptoJS.MD5(string).toString();
  }
});