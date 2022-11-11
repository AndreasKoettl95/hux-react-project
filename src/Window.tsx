import React, {useState} from 'react';
import './Window.css';
import type AppProcessProps from './AppProcessProps';

type WindowProps = {
    children: React.ReactNode,
    title: string
    processProps: AppProcessProps
};

function Window(props: WindowProps) {
    const [windowVisible, setWindowVisible] = useState(true);

    function onClickClose() {
        setWindowVisible(false);
        props.processProps.appClosedCallback(props.processProps.pId);
    }

    return (
        <div className="window" style={{visibility: windowVisible ? 'visible' : 'hidden'}}>
            <div className="window-title">
                <span>{props.title}</span>
                <button className="window-close-button" onClick={onClickClose}>X</button>
            </div>
            <div className="window-content">
                {props.children}
            </div>
        </div>
    );
}

export default Window;
