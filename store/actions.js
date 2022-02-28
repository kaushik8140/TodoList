export const Login = (username,password)=>{
const token = username + password;
return({
    type:"LOGIN",
    payload:token,

})

}


export const Signup = (username,password)=>{
    const token = username + password;
    return({
        type:"SIGNUP",
        payload:token,
    
    })
    
    }