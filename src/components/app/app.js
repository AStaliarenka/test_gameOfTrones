import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';
//import ItemDetails from '../itemDetails';
//import ItemList from '../itemList';
import gotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';

export default class App extends Component {
    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false
    }
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const char = this.state.showRandomChar ? <RandomChar interval={6000}/> : null;

        console.log('hi');

        return (
            <Router> 
                <div className="app">
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button 
                                    className="toggle-btn"
                                    onClick={this.toggleRandomChar}>Toggle random character</button>
                            </Col>
                        </Row>

                        <Route path='/' exact component={() => <h1 style={{color: "white"}}>Hello to all game of thrones lovers</h1>}/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/books' exact component={BooksPage}/>
                        <Route path='/books/:id' render={({match}) => {
                            const {id} = match.params;
                            return <BooksItem bookId={id}/>}}/>
                        <Route path='/houses' component={HousesPage}/>

                    </Container>
                </div>
            </Router>
        )
    }
};