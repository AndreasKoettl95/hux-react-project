import React, {useState} from 'react';

import DesktopIcon from "./DesktopIcon";
import AppNotepad from "./AppNotepad";
import AppImageGallery from "./AppImageGallery";

type AppProcess = {
    pId: number,
    appNode: React.ReactNode
}

function App() {

    const [appProcesses, setAppProcesses] = useState<AppProcess[]>([{
        pId: 123,
        appNode: <AppNotepad appClosedCallback={onAppClosedCallback} pId={123}></AppNotepad>
    }]);
    const [pId, setPId] = useState(0);

    function onAppClosedCallback(pId: number) {
        let processes = appProcesses;

        const index = processes.findIndex(process => process.pId === pId);
        processes.splice(index, 1);

        setAppProcesses(processes);
    }

    function onDesktopIconClickedCallback(appId: string) {

        let newProcessId: number = pId + 1;
        setPId(newProcessId);

        let appNode: JSX.Element|undefined;

        switch (appId) {
            case "notepad":
                appNode = <AppNotepad appClosedCallback={onAppClosedCallback} pId={newProcessId}></AppNotepad>
                break;
            case "imagegallery":
                appNode = <AppImageGallery appClosedCallback={onAppClosedCallback} pId={newProcessId}></AppImageGallery>
                break;
        }

        if (appNode === undefined) {
            return;
        }

        let process: AppProcess = {
            pId: newProcessId,
            appNode: appNode
        }

        let appsActiveCurrent = appProcesses;
        appsActiveCurrent.push(process)
        setAppProcesses(appsActiveCurrent);
    }

    return (
        <div>
            <DesktopIcon title={"Notepad"} appId={"notepad"} clickCallback={onDesktopIconClickedCallback} />
            <DesktopIcon title={"Image Gallery"} appId={"imagegallery"} clickCallback={onDesktopIconClickedCallback} />
            {appProcesses.map((appProcess) => <div key={appProcess.pId} >{appProcess.appNode}</div>)}
        </div>
    );
}

export default App;
