import React, {useState} from "react";

import LockScreenBackground from "./components/LockScreenBackground";
import LockScreenDate from "./components/LockScreenDate";
import LoginForm from "./components/LoginForm";
import LoginInputElement from "./components/LoginInputElement";
import {DesktopProps} from "../Desktop";


interface LoginScreenProps{
    callback(props : DesktopProps) : void
}

function LockScreen (props : LoginScreenProps){
    const[lockScreenOffscreen, setOffscreen] = useState(false);


    function handleClick(){
        setOffscreen(true);
    }




    return (
        <div onClick={handleClick} className={""}>
            <LockScreenBackground blurred={lockScreenOffscreen}></LockScreenBackground>
            <LockScreenDate offScreen={lockScreenOffscreen}></LockScreenDate>
            <LoginForm hidden={!lockScreenOffscreen} callback={props.callback}></LoginForm>
        </div>
    );
}

export default LockScreen;
