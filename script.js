const container = document.getElementById('container');
const toggleSignup = document.getElementById('toggle-signup');
const toggleSignin = document.getElementById('toggle-signin');

toggleSignup.addEventListener('click', () => {
    container.classList.add('active');
});

toggleSignin.addEventListener('click', () => {
    container.classList.remove('active');
});
