const toggle = document.getElementById('toggle');
const password = document.getElementById('password');

toggle.addEventListener('click', function(){
    const type= password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type',type);
// toggle below is a different function
    this.classList.toggle('fa-eye');
});