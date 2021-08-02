import React, { Component } from 'react';
//import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../itemList';
//import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
//import RowBlock from '../rowBlock';
import { withRouter } from 'react-router';

class BooksPage extends Component {

    gotService = new gotService();
    
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error:true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
                onItemSelected={ (itemId) => {
                this.props.history.push(itemId)
                } }
                getData={ this.gotService.getAllBooks }
                // renderItem={ (item) => `${item.name} (${item.gender})` }
                renderItem={ ({ name }) => name }
            />
        )   
    }
}

export default withRouter(BooksPage);