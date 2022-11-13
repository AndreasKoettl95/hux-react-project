import React, {useState} from "react";

import LockScreenBackground from "./components/LockScreenBackground";
import LockScreenDate from "./components/LockScreenDate";
import LoginForm from "./components/LoginForm";
import LoginInputElement from "./components/LoginInputElement";
import TemporaryContainer from "./TemporaryContainer";


interface LoginScreenProps{

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
             <LoginForm hidden={!lockScreenOffscreen}></LoginForm>
        </div>
    );
}

export default LockScreen;
