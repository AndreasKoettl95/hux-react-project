import React from 'react';
import './DesktopIcon.css';
import type {DesktopIconProps} from "./DesktopIconPropsType";

export const DesktopIcon = (props: DesktopIconProps) => {

    const onDoubleClick = (props: DesktopIconProps) => {
        props.clickCallback(props.appId);
    }

    return (
        <div onDoubleClick={() => onDoubleClick(props)} className="desktop-icon">
            <img alt="" className="desktop-icon-image"/>
            <span>{props.title}</span>
        </div>
    );
}
