import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import styles from "./settings.module.css";
const Time = () => {
    return(
    <div className={styles.system}>
        <div className={styles.window}>
        <h1 className={styles.title}>Time settings</h1>
            <Datetime />
        </div>
    </div>
    )
}
export default Time;