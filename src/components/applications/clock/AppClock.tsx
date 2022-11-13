import React, {useEffect, useState} from 'react';
import './AppClock.css';

export const AppClock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div className="clock-content">
            <p>{date.toLocaleTimeString()}</p>
        </div>
    );
}
