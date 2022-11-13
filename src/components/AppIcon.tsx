
import fileExplorerIcon from './Icons/fileExplorerIcon.png';
import './Styling.css';
export default function AppIcon() {
    const handleClick = (e: any) => {
        switch ( e.detail) {
          case 1:
            console.log("Single Click on App Icon");
            break;
          case 2:
            alert("double click on App Icon");
            break;
          default:
            return;
        };
      };
    return (
        <div className='styleIcon' onClick={handleClick}>
            <img src={fileExplorerIcon}  alt='fileExplorerIcon' />
            <label>File Explorer</label>
        </div>
    );
}
