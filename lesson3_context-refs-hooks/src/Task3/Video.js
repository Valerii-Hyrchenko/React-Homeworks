import React, { createRef } from 'react';

export class VideoPlayer extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            videoTotalDuration: 0,
            videoCurrentDuration: 0,
            volumeLevel: 1,
        }
    }
    videoRef = createRef();

    handleVideoPlay = (event) => {
        event.preventDefault();
        this.videoRef.current.play();
    }

    handleVideoPause = (event) => {
        event.preventDefault();
        this.videoRef.current.pause();
    }
    
    handleVideoMute = (event) => {
        event.preventDefault();
        let video = this.videoRef.current;
        if (video.muted) {
            video.muted = false;
            this.setState({ volumeLevel: this.videoRef.current.volume })
            event.target.textContent = "Mute"
        } else {
            video.muted = true;
            this.setState({ volumeLevel: 0 })
            event.target.textContent = "Unmute"
        }
    }

    convertTime = (totalSeconds) => {
        const timeToRender = {
            hours: Math.floor(totalSeconds / 3600),
            minutes: Math.floor((totalSeconds % 3600)/60),
            seconds: totalSeconds % 60,
        };
        for (let item in timeToRender) {
            if (timeToRender[item] < 10) {
                timeToRender[item] = `0${timeToRender[item]}`;
            }
        }
        const { hours, minutes, seconds } = timeToRender;
        return `${hours}:${minutes}:${seconds}`;
    }
    
    setVideoDuration = () => {
        let totalTime = Math.round(this.videoRef.current.duration);
        let currentTime = Math.round(this.videoRef.current.currentTime);
        this.setState({
            videoTotalDuration: totalTime,
            videoCurrentDuration: currentTime,
        });
    }

    handleChangeProgressBar = (event) => {
        event.preventDefault();
        this.videoRef.current.currentTime = event.target.value;
        this.setState({
            videoCurrentDuration: event.target.value,
        });
    }
    handleChangeVolumeBar = (event) => {
        this.videoRef.current.volume = event.target.value;
        this.setState({
            volumeLevel: event.target.value,
        });
    };
    render () {
        const {
            videoCurrentDuration,
            videoTotalDuration,
            volumeLevel,
        } = this.state
        return (
            <div className="video-wrapper">
                <video onTimeUpdate={this.setVideoDuration} poster="../assets/img/poster.jpg" autoPlay loop ref={this.videoRef}>
                    <source src="../assets/video/field.mp4" type="video/mp4"/>
                        <source src="../assets/video/field.ovg" type="video/ovg"/>
                            <source src="../assets/video/field.webm" type="video/webm"/>
                </video>
                <div className="video-controls-wrapper">
                    <input className="video-progress-bar" onChange={this.handleChangeProgressBar}
                    type="range" min="0" max={ videoTotalDuration }
                    value={ videoCurrentDuration }></input>
                    <div className="video-controls">
                        <div>
                            <button className="video-control-button" onClick={this.handleVideoPlay}>Play</button>
                        </div>
                        <div>
                            <button className="video-control-button" onClick={this.handleVideoPause}>Pause</button>
                        </div>
                        <div className="video-volume-level">
                            <span>Volume</span>
                            <input onChange={this.handleChangeVolumeBar}
                            type="range" min="0" max="1" step="0.01" value={volumeLevel}></input>
                        </div>
                        <div>
                            <button className="video-control-button" onClick={this.handleVideoMute}>Mute</button>
                        </div>
                        <div className="video-controls-time-tracking">
                            <p>{ this.convertTime(videoCurrentDuration) }/{ this.convertTime(videoTotalDuration) }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}