import React, { Component } from 'react';
//import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import gotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock';

export default class HousesPage extends Component {

    gotService = new gotService();
    
    state = {
        selectedHouse: 1,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={ this.onItemSelected }
                getData={ this.gotService.getAllHouses }
                // renderItem={ (item) => `${item.name} (${item.gender})` }
                renderItem={ ({ name, gender }) => `${name} (${gender})` }
            />
        )

        const itemDetails = (
            <ItemDetails 
            itemId={ this.state.selectedHouse }
            getData={ this.gotService.getHouse}>
                <Field field='region' label='Region' />
                <Field field='words' label='Words' />
                <Field field='titles' label='Titles' />
                <Field field='overlord' label='Overlord' />
                <Field field='ancestralWeapons' label='Ancestral weapons' />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )   
    }
}