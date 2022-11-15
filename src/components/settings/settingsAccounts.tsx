import { useState } from 'react';
import { userData } from '../user';
import styles from "./settings.module.css";
import {DesktopProps} from "../desktop/Desktop";


export const Accounts = (props : DesktopProps) => {
    const [user, setUser] = useState<userData>(new userData(props.user, props.password, props.bgColor, true, props.user));
    
    return(
    <div className={styles.system}>
        <div className={styles.window}>
        <h1 className={styles.title}>Accounts settings</h1>
        <div>👤Username: {user.username}</div>
        <div>🔑Password: {user.password}</div>
        <div>🎨Background: {user.backgroundColor}</div>
        </div>
    </div>
    )

}