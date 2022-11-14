import React, {useEffect, useState} from 'react';
import './AppClock.css';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

export const AppClock = () => {

    const [value, setValue] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setValue(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div className='clock-content'>
      <p>Current time:</p>
      <Clock value={value} />
    </div>
    );
}
