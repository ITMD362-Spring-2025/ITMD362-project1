document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const emailInput = document.getElementById('email');

  emailInput.addEventListener('blur', validateEmail);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateEmail()) {
      alert('Thank you for signing up!');
      form.reset();
    }
  });

  function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    
    if (!isValid) {
      emailInput.setCustomValidity('Please enter a valid email address');
      emailInput.reportValidity();
      emailInput.style.borderColor = '#ff6b6b';
      return false;
    } else {
      emailInput.setCustomValidity('');
      emailInput.style.borderColor = '#208c8c';
      return true;
    }
  }
});