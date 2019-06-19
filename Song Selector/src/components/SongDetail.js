import React from 'react';
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    if(!song)return <div className='ui header blue'>Select a song</div>;
    else return (
        <div>
            <h3>Song Detail</h3>
            <div className='ui header'>
                <h4>{song.title}</h4>
            </div>
            <div className='ui item'>
                Duration: <strong>{song.duration}</strong>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);