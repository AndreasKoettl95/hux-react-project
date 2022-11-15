import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Desktop} from "./components/desktop/Desktop";
import {DesktopProps} from "./components/desktop/DesktopPropsType";
import './App.css';
import React, {useState} from "react";
import LockScreen from "./LoginPage/LockScreen";

export const App = () => {

    let hideDesktop : string = "hidden";
    let hideLockScreen : string = "";

    let emptyProps : DesktopProps = {
        user : "",
        bgColor : "",
    }

    const[lockScreenOffscreen, setLockscreenOffscreen] = useState(false);
    const[desktopProps, setDesktopProps] = useState(emptyProps);

    if(lockScreenOffscreen){
        hideDesktop = "";
        hideLockScreen = "hidden";
    }

    function LoginCallBack(props : DesktopProps){
        setDesktopProps(props);
        setLockscreenOffscreen(true);
    }

    return (
        <div>
            <div className = {hideLockScreen}>
                <LockScreen callback={LoginCallBack}></LockScreen>
            </div>
            <div className = {hideDesktop}>
                <DndProvider backend={HTML5Backend}>
                    <Desktop user={desktopProps.user} bgColor={desktopProps.bgColor}></Desktop>
                </DndProvider>
            </div>
        </div>
    );
}