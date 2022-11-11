import React from 'react';
import Window from './Window';
import './AppImageGallery.css';
import logo from './logo.svg';
import type AppProcessProps from './AppProcessProps';

function AppImageGallery(props: AppProcessProps) {
    return (
        <Window title={"Image Gallery"} processProps={props}>
            <img src={logo}  alt=""/>
        </Window>
    );
}

export default AppImageGallery;
