import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

class App extends React.Component{
    render() {
        return (
            <div style={{marginTop: '5px'}} className='ui container grid'>
                <div className='sixteen wide mobile eight wide tablet five wide computer column'>
                    <SongList/>
                </div>
                <div className='sixteen wide mobile eight wide tablet eleven wide computer column'>
                    <SongDetail/>
                </div>
            </div>
        );
    }
}

export default App;