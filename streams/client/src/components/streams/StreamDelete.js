import React from 'react';
import {Header, Segment, Message, Button, Modal, Icon,} from "semantic-ui-react";
import {connect} from "react-redux";

import {deleteStream, fetchStream, openModal, closeModal} from "../../actions";


class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    delete(){
        this.props.deleteStream(this.props.match.params.id);
    }

    renderDeleteModal = ({title,description, id}) => {
        return(
            <Modal dimmer='blurring'
                   open={this.props.modals.modal}
                   onClose={()=>this.props.closeModal()}
                   trigger={<Button onClick={()=>this.props.openModal()} inverted basic color='red'>Delete</Button>}
                   basic size='small'>
                <Header color='red' icon='remove circle' content='Delete Stream' />
                <Modal.Content>
                    <p>Are you sure you want to delete this Stream permanently ?</p>
                    <Modal.Description>
                        <Header inverted ><span style={{color: 'red'}}>Title: </span>{title}</Header>
                        <p><span style={{color: 'red'}}>Description: </span>{description}</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={()=>this.props.closeModal()} color='green' inverted>
                        <Icon name='delete' /> No
                    </Button>
                    <Button  onClick={()=>this.delete()} basic color='red' inverted>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    };

    render() {
        if (!this.props.stream){
            return(
                <div>
                    <Header  inverted as='h2'>Loading</Header>
                </div>
            )
        }
        return(
            <div>
                <Segment inverted>
                    <Header as='h2' inverted >Deleted Stream</Header>
                    <Message negative color='black' size='huge'>
                        <Header as='h3'>{this.props.stream.title}</Header>
                        <p>
                            {this.props.stream.description}
                        </p>
                    </Message>
                    {this.renderDeleteModal(this.props.stream)}
                </Segment>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return({
        stream: state.streams[ownProps.match.params.id],
        modals: state.modals
    })
};

export default connect(mapStateToProps, {deleteStream, fetchStream, openModal, closeModal})(StreamDelete);