import React from 'react';

class SearchBar extends React.Component {
    state = { term: null };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <div style={{marginTop: '5px'}} className="search-bar ui inverted segment">
                <form onSubmit={this.onFormSubmit} className="ui inverted form">
                    <div className="inverted field">
                        <label>Video Search</label>
                        <div className='ui inverted large transparent icon input'>
                            <i className="search icon"/>
                            <input
                                style={{color:'white', border: 0, outline: 0, borderBottom: '1px solid black'}}
                                type="text"
                                placeholder="Search..."
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;