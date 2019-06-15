// Import react app and ReactDOM libraries
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';


// Create a react component
const App = function () {
    const page = {
        buttonText : 'Click Me',
        labelText : 'Enter Name',
        css : {backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px 20px', fontSize: '12px'}
    };
    return (
        <div>
            <label className="label" htmlFor="name">{page.labelText}</label>
            <input type="text" id="name"/>
                <button style={page.css}>
                    {page.buttonText}
                </button>
        </div>
    );
};

// Show the react component on the screen
ReactDOM.render( <App/>, document.querySelector("#root") );