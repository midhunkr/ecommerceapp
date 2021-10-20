import { createContext, useState } from "react";

const LoginContext=createContext({
    isLoggedIn:false,
    changeToLogin:()=>{},
    changeToLogOut:()=>{}
});

export function LoginContextProvider(props){
    const [loggedIn,setLoginInfo]=useState(false)
    const context={
        isLoggedIn:loggedIn,
        changeToLogin:changeStatToLogin,
        changeToLogOut:changeStateToLogOut
    }
    function changeStatToLogin(){
        setLoginInfo(true);
    }
    function changeStateToLogOut(){
        setLoginInfo(false);
    }
    return(
        <LoginContext.Provider value={context}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContext;