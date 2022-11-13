import React, {useState} from 'react';
import { useDrag } from 'react-dnd'
import type {WindowProps} from "./WindowPropsType";
import './Window.css';
import {DragItemType} from "./DragItemType";

export const Window = (props: WindowProps) => {
    const [windowVisible, setWindowVisible] = useState(true);

    const onClickClose = () => {
        setWindowVisible(false);
        props.windowClosedCallback(props.processId);
    }

    const onWindowClicked = () => {
        props.windowClickedCallback(props.processId);
    }

    let processId = props.processId;
    let windowPositionLeft = props.windowPositionLeft;
    let windowPositionTop = props.windowPositionTop;

    const [, drag, preview] = useDrag(
        () => ({
            type: DragItemType.WINDOW,
            item: { processId, windowPositionLeft, windowPositionTop }
        }),
        [processId, windowPositionLeft, windowPositionTop],
    )

    return (
        <div onClick={onWindowClicked} ref={preview} className="window" style={{ zIndex: props.windowZIndex, top: windowPositionTop, left: windowPositionLeft, visibility: windowVisible ? 'visible' : 'hidden'}}>
            <div ref={drag} className="window-title">
                <span>{props.windowTitle}</span>
                <button className="window-close-button" onClick={onClickClose}>X</button>
            </div>
            <div className="window-content">
                {props.children}
            </div>
        </div>
    );
}