import React from 'react';
import YTSearch  from 'youtube-api-search';
import Searchbar from './searchbar';

const env = require('dotenv');
env.config();



export default class ListItems extends React.Component{

    state = {
        videos: [],
        term:''
    }

    getResults = (term) => {
        this.setState({term});
        YTSearch({key: process.env.API_KEY, term, maxResults: 20, type: 'video', part: 'snippet'}, videos => this.setState({videos}));
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