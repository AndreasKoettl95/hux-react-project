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
const Settings = () => {
    function handleSearch() {
        alert("Search clicked");
    }
    function onSystem() {
        
        alert("Personalize clicked");
    }
    return (
        <div  className={styles.settings}>
            <div className={styles.window}>
                <h1 className={styles.title}>Windows Settings</h1>
                <input className={styles.searchBar} type="text" placeholder='Find a setting' /> 
                <VscSearch className={styles.searchIcon} onClick={handleSearch}/>
                <div className={styles.items}>
                    <div className={styles.top}>
                        <div className={styles.item} onClick={onSystem}>
                        <MdComputer className={styles.icon}/>
                        System
                        </div>
                        <div className={styles.item}>
                        <MdDevices className={styles.icon}/>
                        Devices
                        </div>
                        <div className={styles.item}>
                        <MdPhoneAndroid className={styles.icon}/>
                        Phone
                        </div>
                        <div className={styles.item}>
                        <MdNetworkWifi className={styles.icon}/>
                        Network & Internet
                        </div>
                    </div>
                    <div className={styles.top}>
                        <div className={styles.item}>
                        <MdApps className={styles.icon}/>
                        Apps
                        </div>
                        <div className={styles.item}>
                        <MdAccountBox className={styles.icon}/>
                        Accounts
                        </div>
                        <div className={styles.item}>
                        <IoMdTime className={styles.icon}/>
                        Time 
                        </div>
                        <div className={styles.item}>
                        <IoMdLock className={styles.icon}/>
                        Privacy
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Settings;