import React, {useCallback, useState} from 'react';
import {useDrop} from 'react-dnd'
import type {XYCoord} from 'react-dnd'
import type {DragItem} from "./DragItemType";
import type {Application} from "./ApplicationType";
import {DesktopIcon} from "./DesktopIcon";
import {AppNotepad} from "./AppNotepad";
import {AppImageGallery} from "./AppImageGallery";
import {Window} from "./Window";
import {ApplicationId} from "./ApplicationIdType";
import {ApplicationIdEnum} from "./ApplicationIdType";
import {DragItemType} from "./DragItemType";

export const Desktop = () => {

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

    const createApplicationComponent = (applicationId: ApplicationId) => {
        let appNode: JSX.Element | undefined;

        switch (applicationId) {
            case ApplicationIdEnum.NOTEPAD:
                appNode = <AppNotepad></AppNotepad>
                break;
            case ApplicationIdEnum.IMAGEGALLERY:
                appNode = <AppImageGallery></AppImageGallery>
                break;
        }

        return appNode;
    }

    const createApplication = (applicationId: ApplicationId) => {
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

    const onDesktopIconClickedCallback = (applicationId: ApplicationId) => {

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

    return (
        <div ref={drop} style={{height: "100%"}}>
            <DesktopIcon title={ApplicationIdEnum.NOTEPAD} appId={ApplicationIdEnum.NOTEPAD} clickCallback={onDesktopIconClickedCallback}/>
            <DesktopIcon title={ApplicationIdEnum.IMAGEGALLERY} appId={ApplicationIdEnum.IMAGEGALLERY} clickCallback={onDesktopIconClickedCallback}/>
            {runningApplications.map((application) => <Window key={application.processId}
                                                      processId={application.processId}
                                                      windowClosedCallback={onApplicationWindowClosedCallback}
                                                      windowClickedCallback={onApplicationWindowClickedCallback}
                                                      windowPositionLeft={application.windowPositionLeft}
                                                      windowPositionTop={application.windowPositionTop}
                                                      windowTitle={application.windowTitle}
                                                      windowZIndex={application.windowZIndex}>{application.appNode}</Window>)}
        </div>
    );
}
