document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.review-form form');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();            // stop actual submission for demo
    alert('Thanks! Your review was received.');
    form.reset();
  });
});