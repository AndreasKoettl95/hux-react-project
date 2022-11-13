import React, {useEffect, useState} from 'react';
import './AppCalender.css';

export const AppCalender = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div className="calender-content">
            <p>{date.toLocaleDateString()}</p>
        </div>
    );
}
