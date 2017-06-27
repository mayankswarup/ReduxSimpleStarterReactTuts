import React, {Component} from 'react';

/*const SearchBar = () => {
    return <input placeholder="Search........."/>;
}*/
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                value= {this.state.term} //controlled form element component
                onChange={event => this.onInputChange(event.target.value)} placeholder="Search........."/><br/>
            </div>
        );
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;