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
import {ApplicationIdEnum} from "../applications/ApplicationIdType";


export const appsArr = [
    {icon: <FcOpenedFolder />, name: 'File Explorer', id: 1, appId: ""},
    {icon: <FcPicture />, name: 'Photos', id: 2,  appId: ApplicationIdEnum.IMAGEGALLERY},
    {icon: <FcSettings />, name: 'Settings', id: 3, appId: ApplicationIdEnum.SETTINGS},
    {icon: <FcCalculator />, name: 'Calculator', id: 4, appId: ""},
    {icon: <FcVlc />, name: 'VLC', id: 5, appId: ""},
    {icon: <FcCalendar />, name: 'Calendar', id: 6, appId: ""},
    {icon: <FcClock />, name: 'Clock', id: 7, appId: ""},
    {icon: <FcCamera />, name: 'Camera', id: 8, appId: ApplicationIdEnum.CAMERA},
    {icon: <FcDocument />, name: 'Notepad', id: 9, appId: ApplicationIdEnum.NOTEPAD},
    {icon: <FcAudioFile />, name: 'Music', id: 10, appId: ""},
    {icon: <FcFullTrash />, name: 'Recycle Bin', id: 11, appId: ApplicationIdEnum.RECYCLEBIN}];

type MenuProps = {
    onMenuItemClickedCallback: Function
};

const Menu = (props: MenuProps) => {

    let menuItems = appsArr.map(app => {
       return {
           icon: app.icon,
           name: app.name,
           id: app.id,
           appId: app.appId,
           onMenuItemClickedCallback: props.onMenuItemClickedCallback
       };
    });
    
    const [user, setUser] = useState<userData>(new userData("John Dunphy", "1234", "grey", false));
    const [apps, setApps] = useState<appData[]>(menuItems);

    const onUsernameClicked = () => {
        props.onMenuItemClickedCallback(ApplicationIdEnum.SETTINGS);
    }

    return (
        
        <section >

            <div className={styles.menu}>
            <div onClick={onUsernameClicked}>{user.name}</div>
            {
                apps.map((app) => {
                    return (
                        <MenuItem icon={app.icon} name={app.name} id={app.id} onMenuItemClickedCallback={props.onMenuItemClickedCallback} appId={app.appId}/>
                    );
                })
            }
            </div>

        </section>
    );
}
export default Menu;
 