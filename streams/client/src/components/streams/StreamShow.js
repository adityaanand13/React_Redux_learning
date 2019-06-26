import React from 'react';
import { connect } from "react-redux";

import { fetchStream } from '../../actions';
import {Header,Segment, Dimmer, Loader} from "semantic-ui-react";


class StreamShow extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        if (!this.props.stream){
            return(
                <div>
                    <Header  inverted as='h2'>Showing Stream</Header>
                    <Segment>
                        <Dimmer active>
                            <Loader indeterminate>Preparing Files</Loader>
                        </Dimmer>
                    </Segment>
                </div>
            )
        }
        return(
            <div>
                <Header  as='h2' inverted  dividing>Showing stream: <span style={{color:'red'}}>{this.props.stream.title}</span></Header>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return({
        stream: state.streams[ownProps.match.params.id]
    })
};

export default connect(mapStateToProps,{fetchStream})(StreamShow);