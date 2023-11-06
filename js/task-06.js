const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
  const dataLength = parseInt(input.getAttribute('data-length'), 10);
  const inputValueLength = input.value.length;

  if (inputValueLength === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});