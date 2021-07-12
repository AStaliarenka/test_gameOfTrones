import React, { useState } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
// import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../characterPage/characterPage';


export default function App() {
    
    const [toggle, onToggle] = useState(true);
    // const [error, setError] = useState(false);
    
    const toggleRandomCharacter = <Button style= {{marginBottom: '40px'}} onClick={() => onToggle(prevstate => !prevstate)} color="info">toggleRandomCharacter</Button>;
    const char = toggle ? <RandomChar/> : null;

    

    // componentDidCatch() {
    //     console.log('error');
    //     setError(true);
    // }
    
    // if (error) {
    //     return <ErrorMessage/>
    // }

    return (
        <>
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {/* <RandomChar/> */}
                        {char}
                        {toggleRandomCharacter}
                    </Col>
                </Row>
                <CharacterPage/>
                {/* <Row>
                    <Col md='6'>
                        <ItemList onCharSelected={this.onCharSelected}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.selectedChar}/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onCharSelected={this.onCharSelected}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.selectedChar}/>
                    </Col>
                </Row> */}
            </Container>
        </>
    );
};