/**
 * Energize Fitness Club — Bespoke Presentation Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('guestPassDialog');
  const openButtons = document.querySelectorAll('.open-pass-dialog');
  const closeBtn = document.getElementById('closePassModal');
  const form = document.getElementById('invitationForm');
  const formView = document.getElementById('dialogFormView');
  const successView = document.getElementById('dialogSuccessView');

  // Open Guest Pass Dialog
  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      formView.style.display = 'block';
      successView.style.display = 'none';
      if (dialog) dialog.showModal();
    });
  });

  // Close Dialog
  if (closeBtn && dialog) {
    closeBtn.addEventListener('click', () => dialog.close());
  }

  // Backdrop dismiss
  if (dialog) {
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const inDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!inDialog) dialog.close();
    });
  }

  // Handle invitation pass issuance
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('guestName').value.trim();
      const phone = document.getElementById('guestPhone').value.trim();
      const code = 'EFC-' + Math.floor(1000 + Math.random() * 9000);

      document.getElementById('generatedCode').textContent = code;

      const waMsg = encodeURIComponent(
        `Hello Energize Fitness Club.\n\nI have registered for a Guest Training Privilege Pass.\n\nGuest: ${name}\nContact: ${phone}\nPass Code: ${code}\nLocation: Ghatkopar West Facility\n\nPlease confirm availability for my arrival.`
      );
      document.getElementById('forwardWhatsAppBtn').href = `https://wa.me/919137543817?text=${waMsg}`;

      formView.style.display = 'none';
      successView.style.display = 'block';
    });
  }

  // Smooth anchor navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
