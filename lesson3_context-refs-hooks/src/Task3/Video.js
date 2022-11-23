import React, { createRef } from 'react';

export class VideoPlayer extends React.Component {
    constructor (props) {
        super(props)

        this.state = { videoDuration: "" }
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
    
    handleLoadedVideo = () => {
        if (this.videoRef.current) {
            let videoDuration = Math.round(+this.videoRef.current.duration);
            this.setState({videoDuration});
        }
        
    }
    
    render () {
        return (
            <div>
                <video onLoadedMetadata={this.handleLoadedVideo} className="video" autoPlay muted loop controls ref={this.videoRef}>
                    <source src="./video/directed.mp4" type="video/mp4"/>
                        <source src="./video/directed.ovg" type="video/ovg"/>
                            <source src="./video/directed.webm" type="video/webm"/>
                </video>
                <div className="video-controls">
                    <div>
                        <button onClick={this.handleVideoPlay}>Play</button>
                    </div>
                    <div>
                        <button onClick={this.handleVideoPause}>Pause</button>
                    </div>
                    <p>Total time: { this.state.videoDuration }</p>
                </div>
            </div>
        )
    }
}