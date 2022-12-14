import React, {useCallback, useState} from 'react';
import {useDrop} from 'react-dnd'
import type {XYCoord} from 'react-dnd'
import type {DragItem} from "./window/DragItemType";
import type {Application} from "../applications/ApplicationType";
import {DesktopIcon} from "./desktop-icon/DesktopIcon";
import {Window} from "./window/Window";
import {ApplicationIdEnum} from "../applications/ApplicationIdType";
import {DragItemType} from "./window/DragItemType";
import Menu from "../menu/menu";
import MenuTaskBar from "../MenuBar";
import windowsten from "../Icons/windowsten.jpg";
import {FcDocument} from 'react-icons/fc';
import {FcPicture} from 'react-icons/fc';
import {AppNotepad} from "../applications/notepad/AppNotepad";
import {AppImageGallery} from "../applications/image-gallery/AppImageGallery";
import {AppBrowser} from "../applications/browser/AppBrowser";
import {AppSettings} from "../applications/settings/AppSettings";
import {AppRecycleBin} from "../applications/recycle-bin/AppRecycleBin";
import {AppCamera} from "../applications/camera/AppCamera";
import {AppClock} from "../applications/clock/AppClock";
import {AppCalender} from "../applications/calender/AppCalender";
import {AppVideoPlayer} from "../applications/video-player/AppVideoPlayer";
import {AppAudioPlayer} from "../applications/audio-player/AppAudioPlayer";
import {AppCalculator} from "../applications/calculator/AppCalculator";
import {AppFileExplorer} from "../applications/file-explorer/AppFileExplorer";

export interface DesktopProps {
    user : string,
    password: string,
    bgColor : string,
}

export const Desktop1 = (props : DesktopProps) => {
    const [bgCol, setBGCol] = useState(props.bgColor);

    let desktopStyle = {
        backgroundImage: `url(${windowsten})`,
        backgroundColor: bgCol,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',

    };

    if(props.bgColor != "" && props.bgColor != null){
        desktopStyle = {
            backgroundImage: ``,
            backgroundColor: bgCol,
            backgroundSize: 'cover',
            height: '100vh',
            width: '100%',

        };
    }

    function RefreshDesktopColor(color : string){
        setBGCol(color);
    }

    const [menuOpen, setMenuOpen] = useState(false);
    const [runningApplications, setRunningApplications] = useState<Application[]>([]);
    const [processIdCount, setProcessIdCount] = useState(0);

    const getApplicationIndex = useCallback((processId: number) => {
        return runningApplications.findIndex(application => application.processId === processId);
    },[runningApplications])

    const setApplicationFocus = (processId: number) => {
        let applications = runningApplications;

        applications.map(application => {
            application.windowZIndex = 1;
            return application;
        });

        const index = getApplicationIndex(processId);

        if (applications[index] === undefined) {
            return;
        }

        applications[index].windowZIndex = 2;

        setRunningApplications(applications);
        setProcessIdCount(processIdCount + 1);
    }

    const closeApplication = (processId: number) => {
        const index = getApplicationIndex(processId);
        let applications = runningApplications;
        applications.splice(index, 1);

        setRunningApplications(applications);
    }

    const createApplicationComponent = (applicationId: string) => {
        let appNode: JSX.Element | undefined;

        switch (applicationId) {
            case ApplicationIdEnum.NOTEPAD:
                appNode = <AppNotepad></AppNotepad>
                break;
            case ApplicationIdEnum.IMAGEGALLERY:
                appNode = <AppImageGallery></AppImageGallery>
                break;
            case ApplicationIdEnum.SETTINGS:
                appNode = <AppSettings user={props.user} bgColor={props.bgColor} password={props.password} RefreshDesktopColor={RefreshDesktopColor}></AppSettings>
                break;
            case ApplicationIdEnum.BROWSER:
                appNode = <AppBrowser></AppBrowser>
                break;
            case ApplicationIdEnum.RECYCLEBIN:
                appNode = <AppRecycleBin></AppRecycleBin>
                break;
            case ApplicationIdEnum.CAMERA:
                appNode = <AppCamera></AppCamera>
                break;
            case ApplicationIdEnum.CLOCK:
                appNode = <AppClock></AppClock>
                break;
            case ApplicationIdEnum.CALENDER:
                appNode = <AppCalender></AppCalender>
                break;
            case ApplicationIdEnum.VIDEOPLAYER:
                appNode = <AppVideoPlayer></AppVideoPlayer>
                break;
            case ApplicationIdEnum.AUDIOPLAYER:
                appNode = <AppAudioPlayer></AppAudioPlayer>
                break;
            case ApplicationIdEnum.CALCULATOR:
                appNode = <AppCalculator></AppCalculator>
                break;
            case ApplicationIdEnum.FILEEXPLORER:
                appNode = <AppFileExplorer></AppFileExplorer>
                break;
        }

        return appNode;
    }

    const createApplication = (applicationId: string) => {
        let appNode = createApplicationComponent(applicationId);

        if (appNode === undefined) {
            return;
        }

        let newProcessId: number = processIdCount + 1;
        setProcessIdCount(newProcessId);

        let application: Application = {
            processId: newProcessId,
            windowPositionTop: 200,
            windowPositionLeft: 200,
            windowTitle: applicationId,
            windowZIndex: 2,
            appNode: appNode
        }

        return application;
    }

    const onApplicationWindowClosedCallback = (processId: number) => {
        closeApplication(processId);
    }

    const onApplicationWindowClickedCallback = (processId: number) => {
        setApplicationFocus(processId);
    }

    const onDesktopIconClickedCallback = (applicationId: string) => {

        let application = createApplication(applicationId);

        if (application === undefined) {
            return;
        }

        let applications = runningApplications;
        applications.map(application => {
            application.windowZIndex = 1;
            return application;
        });

        applications.push(application)
        setRunningApplications(applications);
        setMenuOpen(false);
    }

    const onMenuClicked = () => {
        setMenuOpen(!menuOpen);
    }

    const moveApplicationWindow = useCallback(
        (processId: number, windowPositionLeft: number, windowPositionTop: number) => {
            const index = getApplicationIndex(processId);
            let applications = runningApplications;

            applications.map(application => {
                application.windowZIndex = 1;
                return application;
            });

            applications[index].windowPositionLeft = windowPositionLeft;
            applications[index].windowPositionTop = windowPositionTop;
            applications[index].windowZIndex = 2;

            setRunningApplications(applications);
            setProcessIdCount(processIdCount + 1);
        },
        [runningApplications, setRunningApplications, processIdCount, setProcessIdCount, getApplicationIndex]
    );

    const [, drop] = useDrop(
        () => ({
            accept: DragItemType.WINDOW,
            drop(item: DragItem, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
                const left = Math.round(item.windowPositionLeft + delta.x)
                const top = Math.round(item.windowPositionTop + delta.y)
                moveApplicationWindow(item.processId, left, top)
                return undefined
            },
        }),
        [moveApplicationWindow],
    )

    let menu: JSX.Element|undefined = undefined;

    if (menuOpen) {
        menu = <Menu onMenuItemClickedCallback={onDesktopIconClickedCallback} name={props.user} pw={props.password} bg={props.bgColor}></Menu>;
    }

    return (
        <div ref={drop} style={desktopStyle}>
            <DesktopIcon title={ApplicationIdEnum.NOTEPAD} icon={<FcDocument size="1x"></FcDocument>} appId={ApplicationIdEnum.NOTEPAD} clickCallback={onDesktopIconClickedCallback}/>
            <DesktopIcon title={ApplicationIdEnum.IMAGEGALLERY} icon={<FcPicture size="1x"></FcPicture>} appId={ApplicationIdEnum.IMAGEGALLERY} clickCallback={onDesktopIconClickedCallback}/>
            {runningApplications.map((application) => <Window key={application.processId}
                                                      processId={application.processId}
                                                      windowClosedCallback={onApplicationWindowClosedCallback}
                                                      windowClickedCallback={onApplicationWindowClickedCallback}
                                                      windowPositionLeft={application.windowPositionLeft}
                                                      windowPositionTop={application.windowPositionTop}
                                                      windowTitle={application.windowTitle}
                                                      windowZIndex={application.windowZIndex}>{application.appNode}</Window>)}
            {menu}
            <MenuTaskBar onMenuClickedCallback={onMenuClicked} onTaskbarIconClickedCallback={onDesktopIconClickedCallback}/>
        </div>
    );
}
