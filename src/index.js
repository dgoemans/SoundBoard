import React from 'react';
import {render} from 'react-dom';
import SoundButton from './components/SoundButton'
import './styles.css';

class App extends React.Component {

    constructor(props){
        super(props);

        this.sounds = [
            { track: '', type: 'cantrip', title: 'Minor Illusion', link: 'https://open5e.com/Spellcasting/spells_a-z/m/minor-illusion.html' },
            { track: '', type: 'cantrip', title: 'Vicious Mockery', link: 'https://open5e.com/Spellcasting/spells_a-z/v/vicious-mockery.html' },
            { track: '', type: 'cantrip', title: 'Mage Hand', link: 'https://open5e.com/Spellcasting/spells_a-z/m/mage-hand.html' },
            { track: '', type: 'first', title: 'Healing word', link: 'https://open5e.com/Spellcasting/spells_a-z/h/healing-word.html' },
            { track: '', type: 'first', title: 'Disonant Whispers', link: 'http://engl393-dnd5th.wikia.com/wiki/Dissonant_Whispers' },
            { track: '', type: 'first', title: 'Faerie Fire', link: 'https://open5e.com/Spellcasting/spells_a-z/f/faerie-fire.html' },
            { track: '', type: 'first', title: 'Heroism', link: 'https://open5e.com/Spellcasting/spells_a-z/h/heroism.html' },
            { track: '', type: 'first', title: 'Sleep', link: 'https://open5e.com/Spellcasting/spells_a-z/s/sleep.html' },
            { track: '', type: 'second', title: 'Heat Metal', link: 'https://open5e.com/Spellcasting/spells_a-z/h/heat-metal.html' },
            { track: '', type: 'second', title: 'Silence', link: 'https://open5e.com/Spellcasting/spells_a-z/s/silence.html' },
        ]
    }

    state = {
        link: 'https://open5e.com/Spellcasting/spells_a-z/index.html',
        expanded: true
    }

    _clicked = (link) => {
        console.log(link);
        this.setState({
            link: link
        });
    }

    _toggleButtons = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render () {

        let buttons = [];
        for(let i=0; i<this.sounds.length; i++) {
            buttons.push(<SoundButton 
                key={i} 
                className={`button${(i+1)} ${this.sounds[i].type}` }
                sound={'sounds/' + this.sounds[i].track}
                title={this.sounds[i].title}
                link={this.sounds[i].link}
                onClick={this._clicked}
            />);
        }

        return (<div className='container'>
            <div className={`buttons ${this.state.expanded ? 'visible' : 'hidden'}`}>{buttons}</div>
            <div className='expander' onClick={this._toggleButtons}>...</div>
            <iframe className='frame' src={this.state.link} />
        </div>);
    }
}

render(<App/>, document.getElementById('app'));