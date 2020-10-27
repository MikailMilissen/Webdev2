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

let result = getUser('root','12345');

if(result.isUserAdmin == false || result.isPasswordValid == false){
    console.log('Username or password')
}else{
    console.log('Welcome admin')
}

console.log(result)