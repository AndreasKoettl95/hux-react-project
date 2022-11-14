import styles from './settings.module.css';
import {VscSearch} from 'react-icons/vsc';
import {MdComputer} from 'react-icons/md';
import {MdDevices}  from 'react-icons/md';
import {MdPhoneAndroid} from 'react-icons/md';
import {MdNetworkWifi} from 'react-icons/md';
import {MdApps} from 'react-icons/md';
import {MdAccountBox}   from 'react-icons/md';
import {IoMdTime} from 'react-icons/io';
import {IoMdLock} from 'react-icons/io';
import { useState } from 'react';
import System from './settingsSystem';
import Time from './settingsTime';
import Apps from './settingsApps';
import {Accounts} from './settingsAccounts';
const Settings = () => {
    const [item, setItem] = useState('');
    function handleSearch() {
        alert("Search clicked");
    }
    function onSettingsItem(item: string) {
        setItem(item);
    }
    if(!item) {
    return (
        <div  className={styles.settings}>
            <div className={styles.window}>
                <h1 className={styles.title}>Windows Settings</h1>
                <input className={styles.searchBar} type="text" placeholder='Find a setting' /> 
                <VscSearch className={styles.searchIcon} onClick={handleSearch}/>
                <div className={styles.items}>
                    <div className={styles.top}>
                        <div className={styles.item} onClick={()=>onSettingsItem("System")}>
                        <MdComputer className={styles.icon}/>
                        System
                        </div>
                        <div className={styles.item} onClick={()=>onSettingsItem("Devices")}>
                        <MdDevices className={styles.icon} />
                        Devices
                        </div>
                        <div className={styles.item} onClick={()=>onSettingsItem("Phone")}>
                        <MdPhoneAndroid className={styles.icon}/>
                        Phone
                        </div>
                        <div className={styles.item} onClick={()=>onSettingsItem("Network & Internet")}>
                        <MdNetworkWifi className={styles.icon}/>
                        Network & Internet
                        </div>
                    </div>
                    <div className={styles.top}>
                        <div className={styles.item} onClick={()=>onSettingsItem("Apps")}>
                        <MdApps className={styles.icon} />
                        Apps
                        </div>
                        <div className={styles.item} onClick={()=>onSettingsItem("Accounts")}>
                        <MdAccountBox className={styles.icon} />
                        Accounts
                        </div>
                        <div className={styles.item} onClick={()=>onSettingsItem("Time")}>
                        <IoMdTime className={styles.icon} />
                        Time 
                        </div>
                        <div className={styles.item} onClick={()=>onSettingsItem("System")}>
                        <IoMdLock className={styles.icon} />
                        Privacy
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
switch(item) {
    case "System": return <System />
    case "Time": return <Time />
    case "Apps": return <Apps /> 
    case "Accounts": return <Accounts />
    default: return <div className={styles.window}>{item} page does not exist</div>;
}
}
export default Settings;