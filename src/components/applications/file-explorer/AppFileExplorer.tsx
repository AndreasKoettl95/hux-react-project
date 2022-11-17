import React, {useState} from 'react';
import './AppFileExplorer.css';
import {FcOpenedFolder} from 'react-icons/fc';

export const AppFileExplorer = () => {

    // Example folder structure
    const files = [
        "/bin", "/bin/apt", "/bin/head", "/bin/sftp",
        "/dev",
        "/home", "/home/user_1", "/home/user_2",
        "/usr", "/usr/bin", "/usr/games",
        "/etc", "/etc/mysql",
        "/tmp", "/tmp/cache",
        "/var"
    ];

    const goBackFolderSymbol = "...";
    let currentPathFiles: string[] = [];

    const [currentPath, setCurrentPath] = useState("/");

    const onFolderClicked = (folder: string) => {

        if (folder === goBackFolderSymbol) {
            folder = getParentFolderPath(currentPath);
        }

        setCurrentPath(folder);
    }

    const getParentFolderPath = (file: string) =>  {
        const index = file.lastIndexOf('/')
        return file.substring(0, index === 0 ? 1 : index);
    }

    const getPath = (file: string) => {
        const index = file.lastIndexOf("/");
        return file.substring(0, index + (currentPath !== "/" ? 0 : 1));
    }

    const prettierFileName = (file: string) => {
        if (file === goBackFolderSymbol) {
            return goBackFolderSymbol;
        }

        const index = file.lastIndexOf("/");
        return file.substring(index + 1);
    }

    if (currentPath !== "/") {
        currentPathFiles.push(goBackFolderSymbol);
    }

    files.forEach(file => {
        if (getPath(file) === currentPath) {
            currentPathFiles.push(file);
        }
    });

    return (
        <div className="file-explorer-content">
            <p className="file-explorer-content-path">Path: {currentPath}</p>
            <div className={"file-explorer-content-items"}>
                {currentPathFiles.map((file, index) =>
                    <div onClick={() => {onFolderClicked(file)}} key={index} className="file-explorer-content-item">
                        <FcOpenedFolder scale="1x"></FcOpenedFolder>
                        <span>{prettierFileName(file)}</span>
                    </div>)
                }
            </div>
        </div>
    );
}
