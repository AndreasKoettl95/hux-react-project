import './AppVideoPlayer.css';
import video from './video_1.mp4';

export const AppVideoPlayer = () => {
    return (
        <div className="video-player-content">
            <video src={video} controls={true}></video>
        </div>
    );
}
