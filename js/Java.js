const sharingan = document.querySelector('.sharingan');
const form = document.querySelector('.Wrap');

setTimeout(() => {
  sharingan.style.opacity = '0';
  sharingan.style.visibility = 'hidden';
  form.style.opacity = '1';
  form.style.visibility = 'visible';
}, 5000);

(() => {
  'use strict'

  
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
var input = document.querySelector('input[name="fullName"]');
input.addEventListener('blur', function() {
  var fullName = this.value;
  if (fullName.indexOf(' ') === -1) {
    this.setCustomValidity('Full Name must contain at least one space character');
  } else if (!/^[a-zA-Z\s]*$/.test(fullName)) {
    this.setCustomValidity('Full Name must contain only letters');
  } else {
    this.setCustomValidity('');
  }
});

  var input = document.querySelector('input[name="Phone"]');
  input.addEventListener('blur', function() {
    if (this.value.length < 9 || this.value.length > 10|| this.value.indexOf('-') !== -1) {
      this.setCustomValidity('Phone number should be at least 9 or 10 digits long');
    } else {
      this.setCustomValidity('');
    }
  });
var errorMessage = document.querySelector('#error-message');
form.addEventListener('submit', function(event) {
  var interests = document.querySelectorAll('input[name="interests[]"]:checked');
  if (interests.length < 3) {
    event.preventDefault();
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }
});

var ageSelect = document.querySelector('select[name="age"]');
var errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', function(event) {
  var age = parseInt(ageSelect.value);
  if (age < 23 || age > 38) {
    event.preventDefault();
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
  }
});
  
document.addEventListener("DOMContentLoaded", function() {
  const maleRadio = document.querySelector('input[name="gender"][value="male"]');
  const video = document.getElementById("beidou-video");
  maleRadio.addEventListener("change", function() {
    video.src = "mp4/B.mp4";
    video.load();
    video.play();
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const maleRadio = document.querySelector('input[name="gender"][value="fmale"]');
  const video = document.getElementById("beidou-video");
  maleRadio.addEventListener("change", function() {
    video.src = "mp4/C.mp4";
    video.load();
    video.play();
  });
});
    