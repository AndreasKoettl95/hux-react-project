import {appData} from "../../utils";
import styles from "./menu.module.css";

const MenuItem = (props: appData) => {
    function handleClick() {
        if (props.appId) {
            props.onMenuItemClickedCallback(props.appId);
        } else {
            alert("Menu item clicked, no application found!")
        }
    }

    return (
        <div key={props.id} onClick={handleClick}>
            <div className={styles.icon}>{props.icon}</div>
            <div>{props.name}</div>
        </div>
    );
};
export default MenuItem;
