import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { Card, Container, Row, Col  } from 'react-bootstrap';
import './Sura.css';
import Zoom from 'react-reveal/Zoom';

const Sura = () => {
    const [title, setTitle] = useState([]);

    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setTitle(data))
    }, []);

    const doThis = () =>{
        alert('This site is under construction');
    }

    return (
        <div className='container'>
            {/* <Container>
                <Row>
                    <Col xs={6} md={4}>
                        {
                            title.map(titles =>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{titles.titleAr}</Card.Title>

                                        <Card.Subtitle className="mb-2 text-muted">{titles.title}</Card.Subtitle>
                                        <Card.Text>Verses: {titles.count}
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.Index: {titles.index}
                                        </Card.Text>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    </Col>
                </Row>
            </Container> */}
            
            {
                title.map(titles => 
                    <Zoom bottom>
                    <div className='grid'>
                        <div className='cards'>
                            <h2>{titles.titleAr}</h2>
                            <h2>Sura Name: {titles.title}</h2>
                            <h3>Sura Number: {titles.index}</h3>
                            <h3>Total Varse: {titles.count}</h3>
                            <button className='read-btn' onClick={doThis}>Read More...</button>
                        </div>
                    </div>
                    </Zoom>)
            }
        </div>
    );
};

export default Sura;