import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from '../../services/gotService';
import './housePage.css'

export default class HousePage extends Component {

    gotService = new gotService();
    
    state = {
        selectedHouse: 130,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error:true
        })
    }

    onHouseSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    render() {

        return (
            <Row>
                <Col md='6'>
                    <ItemList onHouseSelected={this.onCharSelected}
                    getData={this.gotService.getAllHouses}
                    />
                </Col>  
                <Col md='6'>
                    <CharDetails houseId={this.state.selectedHouse}/>
                </Col>
            </Row>
        )
        
    }
}