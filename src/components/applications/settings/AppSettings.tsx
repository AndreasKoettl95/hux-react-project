import React from 'react';
import '../image-gallery/AppImageGallery.css';
import Settings, {SettingsProps} from '../../settings/settings';
import {DesktopProps} from "../../desktop/Desktop";


export const AppSettings = (props : SettingsProps) => {
    return (
        <Settings user={props.user} password={props.password} bgColor={props.bgColor} RefreshDesktopColor={props.RefreshDesktopColor}></Settings>
    );
}
