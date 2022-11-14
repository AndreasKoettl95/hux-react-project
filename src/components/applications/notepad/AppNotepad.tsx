import React, {ChangeEvent, useState} from 'react';
import './AppNotepad.css'

export const AppNotepad = () => {

    const [text, setText] = useState("");

    const onChange = (event: ChangeEvent) => {
        const target = event.target as HTMLTextAreaElement;
        setText(target.value)
    }

    return (
        <div className="notepad-content">
            <textarea onChange={onChange} value={text}></textarea>
        </div>
    );
}
