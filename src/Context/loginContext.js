import { createContext, useState } from "react";

const LoginContext=createContext({
    isLoggedIn:false,
    userInfo:[],
    changeToLogin:()=>{},
    changeToLogOut:()=>{}
});

export function LoginContextProvider(props){
    const [loggedIn,setLoginInfo]=useState(false)
    const [useInformation,setUserInormation]=useState([])
    const context={
        isLoggedIn:loggedIn,
        userInfo:useInformation,
        changeToLogin:changeStatToLogin,
        changeToLogOut:changeStateToLogOut
    }
    function changeStatToLogin(userData){
        setUserInormation();
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