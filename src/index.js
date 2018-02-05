import React from 'react';
import {render} from 'react-dom';
import SoundButton from './components/SoundButton'
import './styles.css';

class App extends React.Component {

    constructor(props){
        super(props);

        this.sounds = [
            { track: 'chord_1.wav', title: 'Minor Illusion' },
            { track: 'nylon_progression.wav', title: 'Mage Hand' },
            { track: 'progression_1.wav', title: 'Disonant Whispers' },
            { track: 'electric_f_chord.wav', title: 'Faerie Fire' },
            { track: 'country.wav', title: 'Heroism' },
            { track: 'short_riff.mp3', title: 'Heat Metal' },
            { track: 'slap.wav', title: 'Sleep' },
            { track: 'tenor.wav', title: 'Silence' },
        ]
    }

    render () {

        let buttons = [];
        for(let i=0; i<8; i++) {
            buttons.push(<SoundButton 
                key={i} 
                className={'button' + (i+1)}
                sound={'sounds/' + this.sounds[i].track}
                title={this.sounds[i].title}
            />);
        }

        return (<div className='container'>
            {buttons}
        </div>);
    }
}

render(<App/>, document.getElementById('app'));