import React, {useState} from 'react';

import LoginInputElement from "./LoginInputElement";
import Login, {ConfigDataProps, LoginProps} from "./BackEndCommunication";
import userIcon from "../images/Windows-10-user-icon-big.png"

interface LoginFormProps {
    hidden : boolean,

}




function LoginForm (props : LoginFormProps){
    //private nameRef = React.createRef<LoginInputElement>();
    //private passwordRef = React.createRef<LoginInputElement>();

    const [checkingCredentials, setCheckingCredentials] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);

    let name : string = "";
    let password : string = "";

    function callBack(data : (ConfigDataProps | null)){
        if(data != null){
            setCheckingCredentials(true);
            console.log("yeee");
        } else {
            setLoginFailed(true);
            console.log("gmmmmgmgmgmgm")
        }
    }

    function handleSubmit(event : React.FormEvent) {




        Login(
            {
                username : name,
                password : password,
                callback : callBack
            }
        );



        event.preventDefault();

    }



    let h = " ";
    if(props.hidden){
        h = "hidden ";
    }

    let hideInputFields = "";
    let showWelcome = "hidden";

    function nameCallback (n : string){
        name = n;
    }
    function passwordCallback(p : string){
        password = p;
    }


    if(checkingCredentials){
        hideInputFields = "hidden";
        showWelcome = "";
    }

        return (
            <div className={"flex items-center justify-center h-screen text-white font-segoe bg-cover bg-center " + h } >

                <form onSubmit={handleSubmit} className={"absolute grid h-screen/3 gap-y-3.5 place-items-center " + hideInputFields} >
                    <img className={"object-contain h-40 w-40 rounded-full "} src={userIcon} alt="UserIcon" />
                    <div className={"select-none text-4xl"}>Other User</div>

                    <LoginInputElement callback={nameCallback} name={'Username'} isPassword={false} loginFailed={loginFailed}></LoginInputElement>
                    <LoginInputElement callback={passwordCallback} name={'Password'} isPassword={true} loginFailed={loginFailed}></LoginInputElement>
                    <input className={"hover:opacity-75 focus:opacity-50 blur:opacity-100"} type="submit" value="Login" />
                </form>



                <div className={showWelcome + " animate-pulse display-inline"}>
                    <div className={"text-2xl animate-bounce"}>Welcome!</div>
                </div>

            </div>

        );

}

export default LoginForm;
