import styles from "./settings.module.css";
import { MdWallpaper } from "react-icons/md";
import {IoMdColorFill}  from 'react-icons/io';
import {SetBGColor} from "../../LoginPage/components/BackEndCommunication";


interface SysProps{
    user : string
    RefreshDesktopColor(color : string) : void
}

const System = (props : SysProps) => {

    function ChangeBG(color : string){
            SetBGColor(props.user, color);
            props.RefreshDesktopColor(color);
    }

    return (
    <div className={styles.system}>
      <div className={styles.window}>
        <h1 className={styles.title}>System settings</h1>
        <div className={styles.item}>
          <MdWallpaper className={styles.icon}/>
          Choose a Background Color:
        </div>
        <div className={[styles.color, styles.red].join(' ')} onClick={() => ChangeBG("Red")}>
          <IoMdColorFill />
           Red
        </div>
        <div className={[styles.color, styles.yellow].join(' ')} onClick={() => ChangeBG("Yellow")}>
          <IoMdColorFill />
           Yellow
        </div>
        <div className={[styles.color, styles.green].join(' ')} onClick={() => ChangeBG("Green")}>
            <IoMdColorFill />
              Green
        </div>
        <div className={[styles.color, styles.blue].join(' ')} onClick={() => ChangeBG("Blue")}>
            <IoMdColorFill />
             Blue
            </div>
            <div className={[styles.color, styles.purple].join(' ')} onClick={() => ChangeBG("Purple")}>
            <IoMdColorFill />
                Purple
            </div>
      </div>
    </div>
  );
};
export default System;
