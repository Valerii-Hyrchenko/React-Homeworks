import '../App.css';
import React from 'react';
import { Square } from './Square';
import { VideoPlayer } from './Video';

class AppTask3 extends React.Component {

    render () {
        return (
            <div>
                <Square />
                <VideoPlayer />
            </div>
        )
    }
}

export default AppTask3;