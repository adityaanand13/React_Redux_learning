import React from 'react';
import ReactDOM from 'react-dom';

import {Button, Container, Header, Icon, Modal, Segment} from 'semantic-ui-react';

const ModalPanel = props => {
    return ReactDOM.createPortal(
        (
            <Container>
                <Segment inverted>
                    <Modal dimmer='blurring' trigger={<Button>Delete</Button>} basic size='small'>
                        <Header color='red' icon='remove circle' content='Delete Stream' />
                        <Modal.Content>
                            <p>
                                Are you sure you want to delete the Stream permanently ?
                            </p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button  color='green' inverted>
                                <Icon name='delete' /> No
                            </Button>
                            <Button  basic color='red' inverted>
                                <Icon name='checkmark' /> Yes
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Segment>
            </Container>
        ),document.querySelector('#modal')
    )
};

export default ModalPanel;