import styles from "./settings.module.css";
import { appsArr } from "../menu/menu";
const Apps = () => {
    return (
        <div className={styles.system}>
        <div className={styles.window}>
            <h1 className={styles.title}>Apps settings</h1>
            {appsArr.map((app) => {
                return (
                    <div className={styles.itema}>
                        <div >{app.icon}</div>
                        <div >{app.name}</div>
                    </div>
                );
            }
            )}
            </div>
        </div>
    );

}
export default Apps;