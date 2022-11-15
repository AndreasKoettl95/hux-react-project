import './Styling.css';
import DateTime from './TimeDate';
import volumeIcon from './Icons/volumeIcon.png';
import wifiIcon from './Icons/wifiIcon.png';
import explorerIcon from './Icons/explorerIcon.png';
import fileIcon from './Icons/fileIcon.png';
import searchIcon from './Icons/searchIcon.png';
import windowsIcon from './Icons/windowsIcon.png';
import {ApplicationIdEnum} from "./applications/ApplicationIdType";

type TaskBarProps = {
    onMenuClickedCallback: Function,
    onTaskbarIconClickedCallback: Function
};

export default function MenuTaskBar(props: TaskBarProps) {
    const clickWindows = () => {
        props.onMenuClickedCallback();
    }

    const onClickTaskbarIcon = (appId: string) => {
        props.onTaskbarIconClickedCallback(appId);
    }

    return (
        <div className='menuBar'>
            <div className="MenuBarLeft">
                <div className="barIcons" onClick={clickWindows}>
                    <img src={windowsIcon} alt="" />
                </div>
                <div className="barIcons">
                    <img src={searchIcon} alt="" />
                </div>
                <div className="barIcons" onClick={() => {onClickTaskbarIcon(ApplicationIdEnum.NOTEPAD)}}>
                    <img src={fileIcon} alt="" />
                </div>
                <div className="barIcons" onClick={() => {onClickTaskbarIcon(ApplicationIdEnum.IMAGEGALLERY)}}>
                    <img src={explorerIcon} alt="" />
                </div>
            </div>
            <div className='MenuBarRight'>
                <div className="barIcons">
                    <img src={wifiIcon} alt="" />
                </div>
                <div className="barIcons">
                    <img src={volumeIcon} alt="" />
                </div>
                <div className="barIcons">
                    <DateTime />
                </div>
            </div>
        </div>

    );
}
