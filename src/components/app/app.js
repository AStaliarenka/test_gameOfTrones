import React, { useState } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';





export default function App() {
    
    const [toggle, onToggle] = useState(true);
    const toggleRandomCharacter = <Button style= {{marginBottom: '40px'}} onClick={() => onToggle(prevstate => !prevstate)} color="info">toggleRandomCharacter</Button>;
    const char = toggle ? <RandomChar/> : null;
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
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};