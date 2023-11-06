const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const emailValue = this.elements.email.value.trim();
  const passwordValue = this.elements.password.value.trim();
  if (!emailValue || !passwordValue) {
    alert('Wypenij wszystkie pola!');
  } else {
    const formData = {
      email: emailValue,
      password: passwordValue
};
    console.log(formData);
    this.reset();
}
});






