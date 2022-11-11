import React from 'react';
import logo from './logo.svg';
import './DesktopIcon.css';

type DesktopIconProps = {
    title: string,
    appId: string,
    clickCallback: Function
};

function DesktopIcon(props: DesktopIconProps) {

    function onDoubleClick(props: DesktopIconProps) {
        props.clickCallback(props.appId);
    }

    return (
        <div onDoubleClick={() => onDoubleClick(props)} className="desktop-icon">
            <img src={logo} alt="" className="desktop-icon-image"/>
            <span>{props.title}</span>
        </div>
    );
}

export default DesktopIcon;
