import React , { Component } from 'react';

export default class SearchBar extends Component  {
    constructor(props){
        super(props);
        this.state = { term : ' ' };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState( { term:event.target.value } );
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input
                className='form-control'
                placeholder='Get a five day forcast in your favourite city'
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button className='btn btn-secondary' type='submit'>Submit</button>
                 </span>
            </form>
        );
    }
}
