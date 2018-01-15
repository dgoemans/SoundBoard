import 'howler';
import React, { Component } from 'react';

class SoundButton extends Component {
    constructor(props) {
        
        super(props);

        this.sound = new Howl({
            src: [props.sound]
          });          
    }

    render() {
        const className = 'sound-button ' + this.props.className;
        return <div className={className} onClick={() => {
            this.sound.play();
        }}></div>
    }
}

export default SoundButton;