import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import Header from './Header';
import history from '../history';

import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';


const App = () =>{
    return (
        <div>
            <Router history={history}>
                <Header/>
                <Container>
                    <div>
                        <Switch>
                            <Route path ='/' exact component={StreamList}/>
                            <Route path ='/Streams/new' exact component={StreamCreate}/>
                            <Route path ='/Streams/edit/:id' exact component={StreamEdit}/>
                            <Route path ='/Streams/delete/:id' exact component={StreamDelete}/>
                            <Route path ='/Streams/:id' exact component={StreamShow}/>
                        </Switch>
                    </div>
                </Container>
            </Router>
        </div>
    )
};

export default App;