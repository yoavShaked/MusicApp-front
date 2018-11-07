import React from 'react';
import { Input, Label } from 'reactstrap';

export default class Searchbar extends React.Component {
    search = (event) => {
        this.props.fetchResults(event.target.value);
    }

    render() {
        return (
            <div>
                <Label>Search</Label>
                <Input width={200}
                    onBlur={this.search}
                    placeholder='music' />
            </div>
        );
    }
}