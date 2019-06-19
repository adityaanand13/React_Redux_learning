import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {title: 'Bekhyali', duration: 6.11},
        {title: 'Intezari', duration:5.08},
        {title: 'Hasi', duration: 4.32},
        {title: 'Tera Mera Rishta', duration: 5.47},
        {title: 'Woh Lamhe Woh Baatein', duration: 5.20}
    ]
};

const selectedSongReducer = (SelectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED')
        return action.payload;
    else return SelectedSong;
};

export default combineReducers({
    songs : songReducer,
    selectedSong: selectedSongReducer
});