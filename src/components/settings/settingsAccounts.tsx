import { useState } from 'react';
import { userData } from '../user';
import styles from "./settings.module.css";
export const Accounts = () => {
    const [user, setUser] = useState<userData>(new userData("John Dunphy", "1234", "grey", false,"johnnyboy"));
    
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