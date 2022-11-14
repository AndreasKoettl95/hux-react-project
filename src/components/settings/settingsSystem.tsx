import styles from "./settings.module.css";
import { MdWallpaper } from "react-icons/md";
import {IoMdColorFill}  from 'react-icons/io';
const System = () => {
  return (
    <div className={styles.system}>
      <div className={styles.window}>
        <h1 className={styles.title}>System settings</h1>
        <div className={styles.item}>
          <MdWallpaper className={styles.icon}/>
          Choose a Background Color:
        </div>
        <div className={[styles.color, styles.red].join(' ')}>
          <IoMdColorFill />
           Red
        </div>
        <div className={[styles.color, styles.yellow].join(' ')}>
          <IoMdColorFill />
           Yellow
        </div>
        <div className={[styles.color, styles.green].join(' ')}>
            <IoMdColorFill />
              Green
        </div>
        <div className={[styles.color, styles.blue].join(' ')}>
            <IoMdColorFill />
             Blue
            </div>
            <div className={[styles.color, styles.purple].join(' ')}>
            <IoMdColorFill />
                Purple
            </div>
      </div>
    </div>
  );
};
export default System;
