import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { Menu } from 'semantic-ui-react'

import GoogleAuth from './GoogleAuth';

export default class Header extends Component {
    state = {};

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        // const { activeItem } = this.state;

        return (
            <Menu inverted>
                <Menu.Item name='editorials'>
                    <Link to="/">Streamer</Link>
                </Menu.Item>
                <Menu.Item  position='right' name='reviews' >
                    <Link to="/">Streams</Link>
                </Menu.Item>

                <GoogleAuth/>
            </Menu>
        )
    }
}