document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for signing up!');
    });
  });