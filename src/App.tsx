import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Desktop from "./Desktop";
import {DesktopProps} from "./Desktop";
import Settings from './components/settings/settings';
import './App.css';
import React, {useState} from "react";
import LockScreen from "./LoginPage/LockScreen";
import Menu from "./components/menu/menu";


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


    console.log(desktopProps.bgColor);

    return (
        /*
        <DndProvider backend={HTML5Backend}>
            <Settings />s
            <Desktop></Desktop>
        </DndProvider>
        */
        <div>
            <div className = {hideLockScreen}>
                <LockScreen callback={LoginCallBack}></LockScreen>
            </div>
            <div className = {hideDesktop}>
                <Desktop user={desktopProps.user} bgColor={desktopProps.bgColor}></Desktop>
                <DndProvider backend={HTML5Backend}>
                    <Settings />
                    <Menu></Menu>
                </DndProvider>
            </div>
        </div>


    );
}