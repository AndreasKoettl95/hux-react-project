import { appData } from "../../utils";
import styles from "./menu.module.css";
const MenuItem = (props: appData) => {
function handleClick() {
    alert(props.name+" clicked");
}
  return (
    <div key={props.id} onClick={handleClick}>
      <div className={styles.icon}>{props.icon}</div>
      <div>{props.name}</div>
    </div>
  );
};
export default MenuItem;
