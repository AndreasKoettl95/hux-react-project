import React, {useState} from 'react';

import LoginInputElement from "./LoginInputElement";
import Login, {ConfigDataProps, LoginProps} from "./BackEndCommunication";
import userIcon from "../images/Windows-10-user-icon-big.png"
import {DesktopProps} from "../../components/desktop/DesktopPropsType";

interface LoginFormProps {
    hidden : boolean,
    callback(props : DesktopProps) : void,
}




function LoginForm (props : LoginFormProps){
    //private nameRef = React.createRef<LoginInputElement>();
    //private passwordRef = React.createRef<LoginInputElement>();

    const [checkingCredentials, setCheckingCredentials] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);

    const [confData, setConfData] = useState<ConfigDataProps>();

    let name : string = "";
    let password : string = "";



    function callBack(data : (ConfigDataProps | null)){
        if(data != null){
            setCheckingCredentials(true);
            let data2 : ConfigDataProps = data;
            setConfData(data2);
        } else {
            setLoginFailed(true);
        }
    }

    function resetInputElements(){
        setLoginFailed(false);
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

        //i did all this to avoid a typescript error
        let user : string = "";
        let bgCol : string = "";

        if(confData?.userName != null){
            user = confData?.userName
        }
        if(confData?.backGround != null){
            bgCol = confData?.backGround
        }

        props.callback({
            user : user,
            bgColor : bgCol
        });
    }

    return (
        <div className={"flex items-center justify-center h-screen text-white font-segoe bg-cover bg-center " + h } >

            <form onSubmit={handleSubmit} className={"absolute grid h-screen/3 gap-y-3.5 place-items-center " + hideInputFields} >
                <img className={"object-contain h-40 w-40 rounded-full "} src={userIcon} alt="UserIcon" />
                <div className={"select-none text-4xl"}>Other User</div>

                <LoginInputElement callback={nameCallback} resetCallback={resetInputElements} name={'Username'} isPassword={false} loginFailed={loginFailed}></LoginInputElement>
                <LoginInputElement callback={passwordCallback} resetCallback={resetInputElements} name={'Password'} isPassword={true} loginFailed={loginFailed}></LoginInputElement>
                <input className={"hover:opacity-75 focus:opacity-50 blur:opacity-100"} type="submit" value="Login" />
            </form>





        </div>

    );

}

export default LoginForm;
