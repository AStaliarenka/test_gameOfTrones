import React, { useState } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage/errorMessage';


export default function App() {
    
    const [toggle, onToggle] = useState(true);
    const [error, setError] = useState(false);
    const [selectedChar, setSelectedChar] = useState(null);
    const toggleRandomCharacter = <Button style= {{marginBottom: '40px'}} onClick={() => onToggle(prevstate => !prevstate)} color="info">toggleRandomCharacter</Button>;
    const char = toggle ? <RandomChar/> : null;

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }
    
    if (error) {
        return <ErrorMessage/>
    }

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
                <Row>
                    <Col md='6'>
                        <ItemList onCharSelected={onCharSelected}/>
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={selectedChar}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};