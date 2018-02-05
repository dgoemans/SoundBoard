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
        }}><p className='title'>{this.props.title}</p></div>
    }
}

export default SoundButton;