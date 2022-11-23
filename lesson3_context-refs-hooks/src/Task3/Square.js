import React, { createRef } from 'react';

export class Square extends React.Component {
    squareRef = createRef();
    
    componentDidMount() {
        setTimeout(() => {
            let currentSquare = this.squareRef.current;
            currentSquare.classList.add("square-to-right");
        }, 2000);
    }

    render () {
        return (
            <div className="square" ref={this.squareRef}></div>
        )
    }
}