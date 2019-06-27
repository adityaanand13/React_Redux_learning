import React from 'react';
import { Container, Segment, Flag, Header, Message, Icon } from 'semantic-ui-react';

import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

import UserCreate from './UserCreate';

class App extends React.Component {

    state = {language: 'English'};

    onLanguageChange = language => {
        this.setState({language})
    };

    render() {
        return (
            <div>
                <Container>
                    <Header as='h1' inverted >Select a Language</Header>
                        <Segment inverted>
                            <Flag name='us' onClick={ ()=> this.onLanguageChange('english') }/>
                            <Flag name='in' onClick={ ()=> this.onLanguageChange('hindi') }/>
                            <ColorContext.Provider value='red'>
                                <LanguageContext.Provider value={this.state.language}>
                                    <UserCreate/>
                                </LanguageContext.Provider>
                            </ColorContext.Provider>
                        </Segment>
                    <Message color='black' positive icon floating>
                        <Icon name='language'  />
                        <Message.Content >
                            <Message.Header>Your Selected Language is</Message.Header>
                            <p>
                                {this.state.language.toLocaleUpperCase()}
                            </p>
                        </Message.Content>
                    </Message>
                </Container>
            </div>
        )
    }
}

export default App;