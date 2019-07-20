import React, {useState} from 'react';

import {Container, Segment, Button} from "semantic-ui-react";

import ResourceList from './ResourceList'

const App = () => {
    const  [resource, setResource] = useState('posts');

    return (
        <Container>
            <Segment placeholder raised inverted>
                    <Segment.Inline>
                        <Button
                            onClick ={()=> setResource('posts')}
                            floated='left' color='blue'>
                            Posts
                        </Button>
                        <Button
                            onClick ={()=> setResource('todos')}
                            floated='right' color='green'>
                            Todo
                        </Button>
                    </Segment.Inline>
                <div>
                    <ResourceList resource={resource}/>
                </div>
            </Segment>
        </Container>
    );
};

export default App;