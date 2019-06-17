import React from 'react';

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

//default value for props, if no argument is provided.
Loader.defaultProps = {
    message : "Loading..."
};

export default Loader;