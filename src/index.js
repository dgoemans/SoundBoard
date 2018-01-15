import React from 'react';
import {render} from 'react-dom';
import SoundButton from './components/SoundButton'
import './styles.css';

class App extends React.Component {

    constructor(props){
        super(props);

        this.sounds = [
            'chord_1.wav',
            'progression_1.wav',
            'nylon_progression.wav',
            'electric_f_chord.wav',
            'country.wav',
            'short_riff.mp3',
            'slap.wav',
            'tenor.wav',
        ]
    }

    render () {

        let buttons = [];
        for(let i=0; i<8; i++) {
            buttons.push(<SoundButton 
                key={i} 
                className={'button' + (i+1)}
                sound={'sounds/' + this.sounds[i]}
            />);
        }

        return (<div className='container'>
            {buttons}
        </div>);
    }
}

render(<App/>, document.getElementById('app'));