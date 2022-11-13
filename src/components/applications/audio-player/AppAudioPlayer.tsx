import './AppAudioPlayer.css';
import audio from './audio_1.mp3';

export const AppAudioPlayer = () => {
    return (
        <div className="audio-player-content">
            <audio src={audio} controls={true}></audio>
        </div>
    );
}
