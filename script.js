// Modal öffnen & schließen
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

// Formular-Handling
document.getElementById('appointmentForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Danke! Wir melden uns in Kürze bei dir 😊');
  modal.style.display = 'none';
});
