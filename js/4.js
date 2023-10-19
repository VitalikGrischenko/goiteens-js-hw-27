const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input', function () {
  if (inputName.value === '') {
    outputName.textContent = 'незнайомець';
  } else {
    outputName.textContent = inputName.value;
  }
});

const inputValidation = document.getElementById('validation-input');

inputValidation.addEventListener('blur', function () {
  const requiredLength = parseInt(inputValidation.getAttribute('data-length'), 10);
  if (inputValidation.value.length === requiredLength) {
    inputValidation.classList.remove('invalid');
    inputValidation.classList.add('valid');
  } else {
    inputValidation.classList.remove('valid');
    inputValidation.classList.add('invalid');
  }
});