import React, { Component } from 'react';
//import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock';

export default class BooksPage extends Component {

    gotService = new gotService();
    
    state = {
        selectedBook: 10,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error:true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={ this.onItemSelected }
                getData={ this.gotService.getAllBooks }
                // renderItem={ (item) => `${item.name} (${item.gender})` }
                renderItem={ ({ name, gender }) => `${name} (${gender})` }
            />
        )

        const itemDetails = (
            <ItemDetails 
            itemId={ this.state.selectedBook }
            getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number of pages' />
                <Field field='publisher' label='Publisher' />
                <Field field='released' label='Released' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )   
    }
}