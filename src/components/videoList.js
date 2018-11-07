import React from 'react';
import YTSearch  from 'youtube-api-search';
import Searchbar from './searchbar';
const api_key = 'AIzaSyB8IqscTHsJ7MfOayJX6oS0z9MdMW3HsR4';

export default class ListItems extends React.Component{

    state = {
        videos: [],
        term:''
    }

    getResults = (term) => {
        this.setState({term});
        YTSearch({key: api_key, term, maxResults: 20, type: 'video', part: 'snippet'}, videos => this.setState({videos}));
    }

    render(){
        console.log(this.state.videos)
        return(
            <div>
                <Searchbar fetchResults={this.getResults}/>
            </div>
        );
    }
}