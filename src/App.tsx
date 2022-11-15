import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {Desktop1} from "./components/desktop/Desktop";
import {DesktopProps} from "./components/desktop/Desktop";
import Settings from './components/settings/settings';
import './App.css';
import TemporaryContainer from "./LoginPage/TemporaryContainer";
import React, {useState} from "react";
import LockScreen from "./LoginPage/LockScreen";
import Menu from "./components/menu/menu";


export const App = () => {


    let hideLockScreen : boolean = false;

    let emptyProps : DesktopProps = {
        user : "",
        bgColor : "",
        password: "",
    }

    const[lockScreenOffscreen, setLockscreenOffscreen] = useState(false);
    const[desktopProps, setDesktopProps] = useState(emptyProps);

    if(lockScreenOffscreen){

        hideLockScreen = true;
    }

    function LoginCallBack(props : DesktopProps){
        setDesktopProps(props);
        setLockscreenOffscreen(true);
    }

    if(!hideLockScreen){
        return <LockScreen callback={LoginCallBack}></LockScreen>
    }


    return (
        <DndProvider backend={HTML5Backend}>
                    <Desktop1 user={desktopProps.user} bgColor={desktopProps.bgColor} password={desktopProps.password}></Desktop1>
        </DndProvider>
    );
}