import './Styling.css';
import DateTime from './TimeDate';
import volumeIcon from './Icons/volumeIcon.png';
import wifiIcon from './Icons/wifiIcon.png';
import explorerIcon from './Icons/explorerIcon.png';
import fileIcon from './Icons/fileIcon.png';
import searchIcon from './Icons/searchIcon.png';
import windowsIcon from './Icons/windowsIcon.png';
export default function MenuTaskBar() {
    const clickWindows = () => {
        alert("Menu opened");
      }
    return (
        <div className='menuBar'>
            <div className="MenuBarLeft">
                <div className="barIcons" onClick={clickWindows}>
                    <img src={windowsIcon} />
                </div>
                <div className="barIcons">
                    <img src={searchIcon} />
                </div>
                <div className="barIcons">
                    <img src={fileIcon} />
                </div>
                <div className="barIcons">
                    <img src={explorerIcon} />
                </div>
            </div>
            <div className='MenuBarRight'>
                <div className="barIcons">
                    <img src={wifiIcon} />
                </div>
                <div className="barIcons">
                    <img src={volumeIcon} />
                </div>
                <div className="barIcons">
                    <DateTime />
                </div>
            </div>
        </div>

    );
}
