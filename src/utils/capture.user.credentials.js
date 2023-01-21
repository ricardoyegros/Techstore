 export const captureUserCredentials = (e,state,email,password) =>{
    e.preventDefault();
     email = email.current.value;
     password = password.current.value;
    if(password.length > 3){
        state({
            email,
            password
      })
    }
};