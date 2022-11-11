import React from 'react';
import Window from './Window';
import './AppNotepad.css'
import type AppProcessProps from './AppProcessProps';

function AppNotepad(props: AppProcessProps) {
    return (
        <Window title={"Notepad"} processProps={props}>
            <textarea></textarea>
        </Window>
    );
}

export default AppNotepad;
