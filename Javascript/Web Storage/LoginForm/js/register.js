let inputUsername = document.querySelector('#username')
let inputPassword = document.querySelector('#password')
const registerButton = document.querySelector('#register')

// Storing the information
function register(event){
    event.preventDefault();
    if (inputUsername.value === '' || inputPassword.value === ''){
        alert ('Please give a proper Username Or Password')
    } else {
        window.sessionStorage.setItem('Username', inputUsername.value);
        window.sessionStorage.setItem('Password', inputPassword.value);
        window.location.replace('login.html')
    }
}
registerButton.addEventListener('click',register)