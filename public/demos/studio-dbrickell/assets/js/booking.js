/**
 * Studio-D Brickell Luxury Beauty Salon — Interactive Booking Form Module
 * Provides live client-side validation, field formatting, and modal confirmation
 */

document.addEventListener('DOMContentLoaded', () => {
  initBookingForm();
});

function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const commentsInput = document.getElementById('comments');
  const smsCheckbox = document.getElementById('sms-consent');
  const feedbackBox = document.getElementById('booking-feedback');

  const modal = document.getElementById('booking-success-modal');
  const modalName = document.getElementById('modal-name');
  const modalContact = document.getElementById('modal-contact');

  // Helper validation functions
  function validateName(input, errorId, fieldName) {
    const val = input.value.trim();
    const errorElem = document.getElementById(errorId);
    if (!val || val.length < 2) {
      setError(input, errorElem, `${fieldName} is required (at least 2 characters).`);
      return false;
    }
    setSuccess(input, errorElem);
    return true;
  }

  function validateEmail(input, errorId) {
    const val = input.value.trim();
    const errorElem = document.getElementById(errorId);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) {
      setError(input, errorElem, 'Email address is required.');
      return false;
    } else if (!emailRegex.test(val)) {
      setError(input, errorElem, 'Please enter a valid email address (e.g. name@example.com).');
      return false;
    }
    setSuccess(input, errorElem);
    return true;
  }

  function validatePhone(input, errorId) {
    const val = input.value.trim();
    const errorElem = document.getElementById(errorId);
    const digitsOnly = val.replace(/\D/g, '');
    if (!val) {
      setError(input, errorElem, 'Phone number is required.');
      return false;
    } else if (digitsOnly.length < 10) {
      setError(input, errorElem, 'Please enter a valid 10-digit phone number.');
      return false;
    }
    setSuccess(input, errorElem);
    return true;
  }

  function validateComments(input, errorId) {
    const val = input.value.trim();
    const errorElem = document.getElementById(errorId);
    if (!val || val.length < 3) {
      setError(input, errorElem, 'Please enter your message or service request.');
      return false;
    }
    setSuccess(input, errorElem);
    return true;
  }

  function validateSMS(checkbox, errorId) {
    const errorElem = document.getElementById(errorId);
    if (!checkbox.checked) {
      if (errorElem) {
        errorElem.textContent = 'Please agree to SMS messaging consent to continue.';
        errorElem.classList.add('visible');
      }
      return false;
    }
    if (errorElem) {
      errorElem.textContent = '';
      errorElem.classList.remove('visible');
    }
    return true;
  }

  function setError(input, errorElem, message) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    if (errorElem) {
      errorElem.textContent = message;
      errorElem.classList.add('visible');
    }
  }

  function setSuccess(input, errorElem) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    if (errorElem) {
      errorElem.textContent = '';
      errorElem.classList.remove('visible');
    }
  }

  // Real-time live validation events
  if (firstNameInput) {
    firstNameInput.addEventListener('input', () => validateName(firstNameInput, 'first-name-error', 'First name'));
    firstNameInput.addEventListener('blur', () => validateName(firstNameInput, 'first-name-error', 'First name'));
  }

  if (lastNameInput) {
    lastNameInput.addEventListener('input', () => validateName(lastNameInput, 'last-name-error', 'Last name'));
    lastNameInput.addEventListener('blur', () => validateName(lastNameInput, 'last-name-error', 'Last name'));
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => validateEmail(emailInput, 'email-error'));
    emailInput.addEventListener('blur', () => validateEmail(emailInput, 'email-error'));
  }

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      // Auto phone formatter e.g. (305) 555-0199
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      if (x) {
        e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}` + (x[3] ? `-${x[3]}` : '');
      }
      validatePhone(phoneInput, 'phone-error');
    });
    phoneInput.addEventListener('blur', () => validatePhone(phoneInput, 'phone-error'));
  }

  if (commentsInput) {
    commentsInput.addEventListener('input', () => validateComments(commentsInput, 'comments-error'));
    commentsInput.addEventListener('blur', () => validateComments(commentsInput, 'comments-error'));
  }

  if (smsCheckbox) {
    smsCheckbox.addEventListener('change', () => validateSMS(smsCheckbox, 'sms-consent-error'));
  }

  // Form Submit Handling
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isFirstValid = firstNameInput ? validateName(firstNameInput, 'first-name-error', 'First name') : true;
    const isLastValid = lastNameInput ? validateName(lastNameInput, 'last-name-error', 'Last name') : true;
    const isEmailValid = emailInput ? validateEmail(emailInput, 'email-error') : true;
    const isPhoneValid = phoneInput ? validatePhone(phoneInput, 'phone-error') : true;
    const isCommentsValid = commentsInput ? validateComments(commentsInput, 'comments-error') : true;
    const isSMSValid = smsCheckbox ? validateSMS(smsCheckbox, 'sms-consent-error') : true;

    const isFormValid = isFirstValid && isLastValid && isEmailValid && isPhoneValid && isCommentsValid && isSMSValid;

    if (!isFormValid) {
      if (feedbackBox) {
        feedbackBox.textContent = 'Please correct the highlighted errors before submitting your booking request.';
        feedbackBox.className = 'booking-feedback feedback-error';
        feedbackBox.style.display = 'block';
      }
      // Focus first invalid element
      const firstInvalid = form.querySelector('.is-invalid, input:invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Success Handling
    const fullName = `${firstNameInput ? firstNameInput.value.trim() : ''} ${lastNameInput ? lastNameInput.value.trim() : ''}`.trim();
    const contactInfo = phoneInput ? phoneInput.value.trim() : (emailInput ? emailInput.value.trim() : 'your contact information');

    if (modalName) modalName.textContent = fullName || 'valued client';
    if (modalContact) modalContact.textContent = contactInfo;

    // Show Confirmation Modal
    if (modal) {
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    // Show inline feedback
    if (feedbackBox) {
      feedbackBox.textContent = `Thank you, ${fullName}! Your appointment request has been submitted successfully.`;
      feedbackBox.className = 'booking-feedback feedback-success';
      feedbackBox.style.display = 'block';
    }

    // Reset Form
    form.reset();
    form.querySelectorAll('.is-valid, .is-invalid').forEach((el) => {
      el.classList.remove('is-valid', 'is-invalid');
    });
  });
}
