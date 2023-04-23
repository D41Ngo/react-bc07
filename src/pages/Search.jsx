import React, {Component} from 'react';

class Search extends Component {
    render() {
        console.log(this.props.location);
        return (
            <div>
                <h1>Ban Dang Tim Kiem Noi Dung: {this.props.location.search}</h1>
            </div>
        );
    }
}

export default Search;
