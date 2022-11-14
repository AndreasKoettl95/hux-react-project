import React from 'react';
import './AppBrowser.css'

export const AppBrowser = () => {
    return (
        <div className="browser-content">
            <iframe title="Browser" src="https://google.com/search?igu=1"></iframe>
        </div>
    );
}
