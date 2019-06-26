import React from 'react';
import {connect} from "react-redux";
import {Header} from 'semantic-ui-react';

import {createStream} from "../../actions";
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    onSubmit = (formProps) => {
       this.props.createStream(formProps);
    };
    render() {
        return (
            <div>
                <Header inverted as='h2'>Create a new Stream</Header>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);