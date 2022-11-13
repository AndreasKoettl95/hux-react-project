import React from 'react';
import './AppImageGallery.css';
import image from '../../Icons/windowsten.jpg';

export const AppImageGallery = () => {
    return (
        <div className="imagegallery-content">
            <img src={image} alt=""/>
        </div>
    );
}
