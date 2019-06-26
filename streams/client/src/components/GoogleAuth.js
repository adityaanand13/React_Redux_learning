import React from 'react';
import {connect} from "react-redux";
import {signIn,signOut} from "../actions";

import clientId from '../key/OAuth';
// import {Link} from "react-router-dom";
import {Menu, Icon} from "semantic-ui-react";

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : clientId,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChanged(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChanged);
            })
        });
    }

    onAuthChanged = (isSignedIn) => {
         if (isSignedIn)
             this.props.signIn(this.auth.currentUser.get().getId());
         else
             this.props.signOut()

    };

    renderAuthButton(){
        if (this.props.isSignedIn === null){
            return (
                <Menu.Menu position='right'>
                    <Menu.Item color='red'>
                        Fetching
                    </Menu.Item>
                </Menu.Menu>
            )
        }else if(this.props.isSignedIn) {
                return (
                    <Menu.Menu position='right'>
                        <Menu.Item onClick={this.onSignOutClick}>
                            <Icon color='red' name='google'/>
                            Sign Out
                        </Menu.Item>
                    </Menu.Menu>
                )
        }else{
            return (
                <Menu.Menu position='right'>
                    <Menu.Item onClick={this.onSignInClick}>
                        <Icon color='red' name='google'/>
                        Sign In with Google
                    </Menu.Item>
                </Menu.Menu>
            )
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    render () {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = state => {
    return {isSignedIn : state.auth.isSignedIn}
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);