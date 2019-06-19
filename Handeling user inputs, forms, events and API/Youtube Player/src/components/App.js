import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import KEY from "../key/youtube";

class App extends React.Component{
    state = {videos: [], selectedVideo: null};

    onTermSubmit = async term => {
        const response =
            await axios.get(
                'https://www.googleapis.com/youtube/v3/search', {
                params: {
                    type: 'video',
                    part: 'snippet',
                    maxResults: 15,
                    key: KEY,
                    q: term
                }
            }
        );
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    };

    display(){
        if(!this.state.selectedVideo){
            return(
                <div style={{height:'80vh'}} className="ui inverted segment">
                    <div className="ui active dimmer">
                        <div className="ui huge text loader">Search to launch</div>
                    </div>
                </div>
            );
        }else {
            return(
                <div className='ui inverted grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className='five wide column'>
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos ={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="search-bar ui inverted container">
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                {this.display()}
            </div>
        );
    }

}
export default App;