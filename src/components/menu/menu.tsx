import { useState } from 'react';
import {userData} from '../user';
import {FcOpenedFolder} from 'react-icons/fc';
import {FcPicture}  from 'react-icons/fc';
import {FcSettings} from 'react-icons/fc';
import {FcCalculator} from 'react-icons/fc';
import styles from './menu.module.css';
import {FcVlc} from 'react-icons/fc';
import {FcCalendar} from 'react-icons/fc';
import {FcClock} from 'react-icons/fc';
import {FcCamera} from 'react-icons/fc';
import {FcDocument} from 'react-icons/fc';
import {FcAudioFile} from 'react-icons/fc';
import {FcFullTrash} from 'react-icons/fc';
import Settings from '../settings/settings';
import { appData } from '../../utils';
import MenuItem from './menuItem';


export const appsArr= [{icon: <FcOpenedFolder />, name: 'File Explorer', id: 1}, {icon: <FcPicture />, name: 'Photos', id: 2}, {icon: <FcSettings />, name: 'Settings', id: 3}, {icon: <FcCalculator />, name: 'Calculator', id: 4}, {icon: <FcVlc />, name: 'VLC', id: 5}, {icon: <FcCalendar />, name: 'Calendar', id: 6}, {icon: <FcClock />, name: 'Clock', id: 7}, {icon: <FcCamera />, name: 'Camera', id: 8}, {icon: <FcDocument />, name: 'Word', id: 9}, {icon: <FcAudioFile />, name: 'Music', id: 10}, {icon: <FcFullTrash />, name: 'Recycle Bin', id: 11}];

const Menu = () => {
    
    const [user, setUser] = useState<userData>(new userData("John Dunphy", "1234", "grey", false));
    const [apps, setApps] = useState<appData[]>(appsArr);
    return (
        
        <section >

            <div className={styles.menu}>
            <div>{user.name}</div>
            {
                apps.map((app) => {
                    return (
                        <MenuItem icon={app.icon} name={app.name} id={app.id} />
                    );
                })
            }
            </div>

        </section>
    );
}
export default Menu;
 