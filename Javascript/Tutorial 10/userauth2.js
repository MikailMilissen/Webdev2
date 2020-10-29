//selectors
let usernameValue = document.getElementById('username');
let passwordValue = document.getElementById('password');
// 
function getUser(username,password){
    let user_bool = (username == 'admin')? true:false;
    let pass_bool = (password == '12345')? true:false;
    console.log('username>', user_bool)
    console.log('password>', pass_bool)

    let user ={
        isUserAdmin: user_bool,
        isPasswordValid: pass_bool
    }
    return user;
}

//callbackfunction
function loginHandler(){
    console.log(usernameValue.value);
    console.log(passwordValue.value);
    let result = getUser(usernameValue.value,passwordValue.value)
    if(result.isUserAdmin == false || result.isPasswordValid == false){
        console.log('Username or password')
        alert('username is incorrect')
    }else{
        console.log('Welcome admin')
        alert('welcome')
    }
}