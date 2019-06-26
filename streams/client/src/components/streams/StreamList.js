import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {Button, List, Segment, Header} from 'semantic-ui-react'

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderCreate() {
        if (this.props.isSignedIn)
            return (<Button as={Link} to='/streams/new' floated='right' positive>Create new</Button>)
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <Button.Group>
                    <Button as={Link} to={`streams/edit/${stream.id}`} inverted basic color='blue'>Edit</Button>
                    <Button.Or/>
                    <Button as={Link} to={`streams/delete/${stream.id}`} inverted basic color='red'>Delete</Button>}
                </Button.Group>
            )
        }
    }

    renderList(){
        return this.props.streams.map(stream => {
            return(
                <List.Item key={stream.id}>
                    <List.Content floated='right'>
                        {this.renderAdmin(stream)}
                    </List.Content>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content as={Link} to={`streams/${stream.id}`}>
                        <List.Header >{stream.title}</List.Header>
                        <List.Description>{stream.description}</List.Description>
                    </List.Content>
                </List.Item>
            )
        })
    }

    render() {
        return(
            <div>
                <Header as='h2' inverted dividing>
                    Stream List
                </Header>
                <Segment inverted>
                <List divided inverted relaxed>
                    {this.renderList()}
                </List>
                </Segment>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapsStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn:  state.auth.isSignedIn,
        modals: state.modals
    }
};

export default connect(mapsStateToProps, { fetchStreams })(StreamList);