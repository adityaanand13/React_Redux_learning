import React from 'react';

class SearchBar extends React.Component {

    state = { term : ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        //use this.onInputChange not this.onInputChange() as the earlier will only invoke when required
        //the latter will invoke every time it is rendered
        return (
            <div className="ui segment" style={{marginTop : '10px'}}>
                <form onSubmit={this.onFormSubmit} className="ui form" action="">
                    <div className="ui field">
                        <label htmlFor="imageSearch">Image Search</label>
                        <input id="imageSearch"
                               type="text"
                               value={this.state.term}
                               onChange={e => this.setState({term : e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;