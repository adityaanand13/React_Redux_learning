import _ from 'lodash';
import React from 'react';
import { connect } from "react-redux";
import {Header} from "semantic-ui-react";

import {editStream, fetchStream} from "../../actions";
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.stream){
            return(
                <div>
                    <Header  inverted as='h2'>Edit a stream</Header>
                    <StreamForm
                        loading={true}
                        onSubmit={this.onSubmit}
                    />
                </div>
            )
        }
        return(
            <div>
                <Header  as='h2' inverted  dividing>Edit a stream</Header>
                <StreamForm
                    initialValues={(_.pick(this.props.stream, 'title', 'description'))}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return({
        stream: state.streams[ownProps.match.params.id]
    })
};

export default connect(mapStateToProps, {editStream, fetchStream})(StreamEdit);