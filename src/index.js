import React from 'react';
import {render} from 'react-dom';
import SoundButton from './components/SoundButton'
import './styles.css';

class App extends React.Component {

    constructor(props){
        super(props);

        this.sounds = [
            { track: '', title: 'Home', link: 'https://open5e.com/Spellcasting/spells_a-z/index.html' },
            { track: 'chord_1.wav', title: 'Minor Illusion', link: 'https://open5e.com/Spellcasting/spells_a-z/m/minor-illusion.html' },
            { track: 'nylon_progression.wav', title: 'Mage Hand', link: 'https://open5e.com/Spellcasting/spells_a-z/m/mage-hand.html' },
            { track: 'progression_1.wav', title: 'Disonant Whispers', link: 'http://engl393-dnd5th.wikia.com/wiki/Dissonant_Whispers' },
            { track: 'electric_f_chord.wav', title: 'Faerie Fire', link: 'https://open5e.com/Spellcasting/spells_a-z/f/faerie-fire.html' },
            { track: 'country.wav', title: 'Heroism', link: 'https://open5e.com/Spellcasting/spells_a-z/h/heroism.html' },
            { track: 'short_riff.mp3', title: 'Heat Metal', link: 'https://open5e.com/Spellcasting/spells_a-z/s/heat-metal.html' },
            { track: 'slap.wav', title: 'Sleep', link: 'https://open5e.com/Spellcasting/spells_a-z/s/sleep.html' },
            { track: 'tenor.wav', title: 'Silence', link: 'https://open5e.com/Spellcasting/spells_a-z/s/silence.html' },
        ]
    }

    state = {
        link: 'https://open5e.com/Spellcasting/spells_a-z/index.html'
    }

    _clicked = (link) => {
        console.log(link);
        //window.open(link);
        this.setState({
            link: link
        });
    }

    render () {

        let buttons = [];
        for(let i=0; i<this.sounds.length; i++) {
            buttons.push(<SoundButton 
                key={i} 
                className={'button' + (i+1)}
                sound={'sounds/' + this.sounds[i].track}
                title={this.sounds[i].title}
                link={this.sounds[i].link}
                onClick={this._clicked}
            />);
        }

        return (<div className='container'>
            <div className='buttons'>{buttons}</div>
            <iframe className='frame' src={this.state.link} />
        </div>);
    }
}

render(<App/>, document.getElementById('app'));