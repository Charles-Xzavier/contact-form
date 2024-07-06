'use strict';

const form = document.querySelector('.form');
const firstName = document.querySelector('.firstname-input');
const lastName = document.querySelector('.lastname-input');
const email = document.querySelector('.email-input');
const radioDivs = document.querySelectorAll('.query-type');
const queryTypeInputs = document.querySelectorAll('input[name="query-type"]');
const queryAlert = document.querySelector('.empty-query-alert');
const message = document.querySelector('.text');
const consentbox = document.querySelector('.checkbox');
const successMessage = document.querySelector('.success-message');

const emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// Add event listeners to query type radio buttons to hide the alert when selected
queryTypeInputs.forEach((input) => {
  input.addEventListener('change', function () {
    queryAlert.style.display = 'none';
  });
});

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener('change', function () {
    radioDivs.forEach((option) => {
      option.style.backgroundColor = '';
    });
    if (radio.checked) {
      radio.closest('.query-type').style.backgroundColor = 'hsl(148, 38%, 91%)';
    }
  });
});

form.addEventListener('submit', (e) => {
  let isValid = true;

  e.preventDefault();

  //firstname check
  if (firstName.value === '' || firstName.value == null) {
    document.querySelector('.empty-firstname-alert').style.display = 'block';
    firstName.className = 'error';
    isValid = false;
  } else {
    document.querySelector('.empty-firstname-alert').style.display = 'none';
    firstName.classList.remove('error');
  }

  //firstname check on input
  firstName.addEventListener('input', () => {
    if (firstName.value === '' || firstName.value == null) {
      document.querySelector('.empty-firstname-alert').style.display = 'block';
      firstName.className = 'error';
      isValid = false;
    } else {
      document.querySelector('.empty-firstname-alert').style.display = 'none';
      firstName.classList.remove('error');
    }
  });

  //lastname check
  if (lastName.value === '' || lastName.value == null) {
    document.querySelector('.empty-lastname-alert').style.display = 'block';
    lastName.className = 'error';
    isValid = false;
  } else {
    document.querySelector('.empty-lastname-alert').style.display = 'none';
    lastName.classList.remove('error');
  }

  //lastname check on input
  lastName.addEventListener('input', () => {
    if (lastName.value === '' || lastName.value == null) {
      document.querySelector('.empty-lastname-alert').style.display = 'block';
      lastName.className = 'error';
      isValid = false;
    } else {
      document.querySelector('.empty-lastname-alert').style.display = 'none';
      lastName.classList.remove('error');
    }
  });

  //email check
  if (email.value === '' || email.value == null) {
    document.querySelector('.empty-email-alert').style.display = 'block';
    email.className = 'error';
    isValid = false;
  } else if (!email.value.match(emailCheck)) {
    document.querySelector('.invalid-email-alert').style.display = 'block';
    document.querySelector('.empty-email-alert').style.display = 'none';
    email.className = 'error';
    isValid = false;
  } else {
    e.preventDefault();
    document.querySelector('.empty-email-alert').style.display = 'none';
    document.querySelector('.invalid-email-alert').style.display = 'none';
    email.classList.remove('error');
  }

  //email check on input
  email.addEventListener('input', () => {
    if (email.value === '' || email.value == null) {
      document.querySelector('.empty-email-alert').style.display = 'block';
      email.className = 'error';
      isValid = false;
    } else if (!email.value.match(emailCheck)) {
      document.querySelector('.invalid-email-alert').style.display = 'block';
      document.querySelector('.empty-email-alert').style.display = 'none';
      email.className = 'error';
      isValid = false;
    } else {
      e.preventDefault();
      document.querySelector('.empty-email-alert').style.display = 'none';
      document.querySelector('.invalid-email-alert').style.display = 'none';
      email.classList.remove('error');
    }
  });

  //query check
  let queryTypeChecked = false;
  queryTypeInputs.forEach((input) => {
    if (input.checked) {
      queryTypeChecked = true;
    }
  });
  if (!queryTypeChecked) {
    document.querySelector('.empty-query-alert').style.display = 'block';
    isValid = false;
  } else {
    document.querySelector('.empty-query-alert').style.display = 'none';
  }

  // message check
  if (message.value === '' || message.value == null) {
    document.querySelector('.empty-message-alert').style.display = 'block';
    message.className = 'error';
    isValid = false;
  } else {
    document.querySelector('.empty-message-alert').style.display = 'none';
    message.classList.remove('error');
  }

  //message check on input
  message.addEventListener('input', () => {
    if (message.value === '' || message.value == null) {
      document.querySelector('.empty-message-alert').style.display = 'block';
      message.className = 'error';
      isValid = false;
    } else {
      document.querySelector('.empty-message-alert').style.display = 'none';
      message.classList.remove('error');
    }
  });

  //consent check
  if (!consentbox.checked) {
    document.querySelector('.unchecked-alert').style.display = 'block';
    isValid = false;
  } else {
    document.querySelector('.unchecked-alert').style.display = 'none';
  }

  // consent check on click
  consentbox.addEventListener('change', () => {
    if (!consentbox.checked) {
      document.querySelector('.unchecked-alert').style.display = 'block';
      isValid = false;
    } else {
      document.querySelector('.unchecked-alert').style.display = 'none';
    }
  });

  //check validity
  if (isValid) {
    const data = new FormData(e.target);
    const entries = Object.fromEntries(data.entries());
    console.table(entries);
    successMessage.style.display = 'grid';
    form.reset();

    radioDivs.forEach((option) => {
      option.style.backgroundColor = 'white';
    });
  }
});
