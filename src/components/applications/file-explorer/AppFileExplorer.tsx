import React from 'react';
import './AppFileExplorer.css';
import {FcOpenedFolder} from 'react-icons/fc';

export const AppFileExplorer = () => {

    const files = [
        "bin",
        "dev",
        "home",
        "lib",
        "proc",
        "sys",
        "usr",
        "etc",
        "tmp",
        "var"
    ];

    return (
        <div className="file-explorer-content">
            {files.map((file, index) =>
                <div key={index} className="file-explorer-content-item">
                    <FcOpenedFolder scale="1x"></FcOpenedFolder>
                    <span>{file}</span>
                </div>)}
        </div>
    );
}
