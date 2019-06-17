import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from "./Loader";

class App extends React.Component {
    //can use constructor, but the transpiler will do the same
    //this is the only time we only do direct assignment, else use setState method
    state = { lat: null, errorMessage : '' };

    //will invoke onetime when component is mounted in browser
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // this is how we update state of state object
            position => this.setState({ lat : position.coords.latitude}),
            // if user denies location then error message will be updated
            err => this.setState({errorMessage : err.message})
        );
    }

    //will invoke every time when component is updated
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component is updated");
    }

    //will invoke one time when component is removed from the browser
    componentWillUnmount() {
        console.log("Component is removed");
    }

    //modularisation of every component
    renderContent(){
        if (this.state.errorMessage && !this.state.lat)
            return ( <div>Error : {this.state.errorMessage}</div> );
        else if (!this.state.errorMessage && this.state.lat)
            return (<SeasonDisplay lat={this.state.lat}/>);
        else
            return (<Loader message = "Loading Location"/>);
    }

    //react says we have to define render
    render(){ return this.renderContent();}
}

ReactDOM.render(<App/>, document.querySelector('#root'));