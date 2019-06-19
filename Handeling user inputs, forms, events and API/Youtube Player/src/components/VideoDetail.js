import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div style={{height:'80vh'}} className="ui segment">
                <div className="ui active inverted dimmer">
                    <div className="ui huge text loader">Search to launch</div>
                </div>
                <p></p>
                <p></p>
                <p></p>
            </div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;

    return (
        <div>
            <div className="ui inverted embed">
                <iframe title="video player" src={videoSrc} allow='autoplay' allowFullScreen/>
            </div>
            <div className="ui inverted segment">
                <h4 className="ui inverted header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;