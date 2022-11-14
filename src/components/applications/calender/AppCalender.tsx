import React, {useEffect, useState} from 'react';
import './AppCalender.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const AppCalender = () => {

    
  const [value, onChange] = useState(new Date());


    return (
        <div className='calender-content'>
      <Calendar className='calender' onChange={onChange} value={value} />
    </div>
    );
}
