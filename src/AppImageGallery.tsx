import React from 'react';
import './AppImageGallery.css';
import image from './components/Icons/windowsten.jpg';

export const AppImageGallery = () => {
    return (
        <div className="imagegallery-content">
            <img src={image} alt=""/>
        </div>
    );
}
